import { LoginSchema } from 'features/AuthByUsername';
import { UserSchema } from 'entities/User';

export interface StateSchema {
    user: UserSchema;
    loginForm?: LoginSchema;
}
