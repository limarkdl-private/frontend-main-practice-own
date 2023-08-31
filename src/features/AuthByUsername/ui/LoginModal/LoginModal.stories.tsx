import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { LoginModal } from './LoginModal';

const meta: Meta<typeof LoginModal> = {
    title: 'Features/LoginModal/UI',
    component: LoginModal,
    args: {
        isOpen: true,
    },
};

export default meta;
type Story = StoryObj<typeof LoginModal>;

export const LoginModalLight: Story = {
    name: 'Light',
};
LoginModalLight.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({})];

export const LoginModalDark: Story = {
    name: 'Dark',
};
LoginModalDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

export const LoginModalDarkBlue: Story = {
    name: 'Dark Blue',
};
LoginModalDarkBlue.decorators = [ThemeDecorator(Theme.DARK_BLUE), StoreDecorator({})];

// Group by State
export const LoginModalErrorLight: Story = {
    name: 'Light/Error',
};
LoginModalErrorLight.decorators = [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator(
        {
            loginForm:
                {
                    error: 'Something went wrong!',
                },
        },
    ),
];

export const LoginModalErrorDark: Story = {
    name: 'Dark/Error',
};
LoginModalErrorDark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator(
        {
            loginForm:
                {
                    error: 'Something went wrong!',
                },
        },
    ),
];

export const LoginModalErrorDarkBlue: Story = {
    name: 'Dark Blue/Error',
};
LoginModalErrorDarkBlue.decorators = [
    ThemeDecorator(Theme.DARK_BLUE),
    StoreDecorator(
        {
            loginForm:
                {
                    error: 'Something went wrong!',
                },
        },
    ),
];

export const LoginModalLoading: Story = {
    name: 'Loading',
};
LoginModalLoading.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator(
        {
            loginForm:
                {
                    isLoading: true,
                },
        },
    ),
];
