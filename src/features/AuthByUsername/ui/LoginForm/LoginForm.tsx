import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import React, { memo, useCallback } from 'react';
import CryptoJS from 'crypto-js';
import { ImCross } from 'react-icons/im';
import { RxCross1 } from 'react-icons/rx';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.css';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();

    const dispatch = useDispatch();
    const {
        username, password, error, isLoading,
    } = useSelector(getLoginState);

    const onChangeUsername = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(loginActions.setUsername(event.target.value));
    }, [dispatch]);

    const onChangePassword = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        // eslint-disable-next-line max-len
        dispatch(loginActions.setPassword(CryptoJS.AES.encrypt(JSON.stringify(event.target.value), 'TEST ENCRYPT').toString()));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch<any>(loginByUsername({ username, password }));
    }, [dispatch, username, password]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <p style={{
                fontSize: '20px', textAlign: 'center', marginBottom: '32px', color: 'var(--primary-color)',
            }}
            >
                {t('Authorization')}
            </p>
            <div className={cls.inputGroup}>
                <input id="username" type="text" required autoComplete="off" onChange={onChangeUsername} />
                <label htmlFor="username">{t('username')}</label>
            </div>
            <div className={cls.inputGroup}>
                <input id="password" type="password" required autoComplete="off" onChange={onChangePassword} />
                <label htmlFor="password">{t('password')}</label>
            </div>
            {error
                && (
                    <div style={{ display: 'flex', justifyContent: 'center', padding: '10px 0 10px' }}>
                        <RxCross1 color="red" />
                        &nbsp;
                        <p className={cls.errorStatus}>
                            {error}
                        </p>
                        &nbsp;
                        <RxCross1 color="red" />
                    </div>
                )}
            <div className={cls.statusAndLoginBtn}>
                <Button
                    className={cls.loginBtn}
                    theme={ButtonTheme.PRIMARY}
                    onClick={onLoginClick}
                    disabled={isLoading}
                >
                    {t('Log_in')}
                </Button>
            </div>

        </div>
    );
});
