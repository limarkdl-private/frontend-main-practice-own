import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { LoginForm } from './LoginForm';

const meta: Meta<typeof LoginForm> = {
    title: 'Features/LoginForm/UI',
    component: LoginForm,
    decorators: [
        StoreDecorator({}),
    ],
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const LoginFormLight: Story = {
    name: 'Light',
};
LoginFormLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const LoginFormDark: Story = {
    name: 'Dark',
};
LoginFormDark.decorators = [ThemeDecorator(Theme.DARK)];

export const LoginFormDarkBlue: Story = {
    name: 'Dark Blue',
};
LoginFormDarkBlue.decorators = [ThemeDecorator(Theme.DARK_BLUE)];
