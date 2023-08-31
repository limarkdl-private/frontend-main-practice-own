import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { USER_LOCAL_STORAGE_KEY } from 'shared/const/localStorage';
import CryptoJS from 'crypto-js';
import { User, userActions } from 'entities/User';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

function decryptBeforeSending(password: string): string {
    // eslint-disable-next-line max-len
    const decryptedPassword = CryptoJS.AES.decrypt(password, 'TEST ENCRYPT').toString(CryptoJS.enc.Utf8).replace(/"/g, '');
    console.log(decryptedPassword);
    return decryptedPassword;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, { rejectValue: string }>(
    'login/loginByUsername',
    async ({ username, password }: LoginByUsernameProps, thunkAPI) => {
        try {
            // Hash the password
            const hashedPassword = decryptBeforeSending(password);

            const response = await axios.post<User>(
                'https://vesta.uclan.ac.uk/~ikostin/API-uclan-merch-shop/public/api/login/',
                { username, password: hashedPassword },
                {
                    withCredentials: true,
                },
            );

            if (!response.data) {
                throw new Error();
            }

            localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data));
            thunkAPI.dispatch(userActions.setAuthData(response.data));
            // @ts-ignore
            return response.data.message;
        } catch (e) {
            const errorResponse = e.response?.data;
            return thunkAPI.rejectWithValue(errorResponse?.message || 'An error occurred');
        }
    },
);
