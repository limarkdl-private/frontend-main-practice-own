import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { loginReducer } from 'features/AuthByUsername';
import { userReducer } from 'entities/User';

export function createReduxStore(initialState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        user: userReducer,
        loginForm: loginReducer,
    };

    return configureStore<StateSchema>({
        reducer: rootReducers,
        devTools: true,
        preloadedState: initialState,
    });
}
