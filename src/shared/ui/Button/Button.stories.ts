import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button, ButtonTheme } from './Button';

const meta: Meta<typeof Button> = {
    title: 'Shared/Button/UI',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        theme: {
            control: {
                type: 'radio',
                options: Object.values(ButtonTheme),
                default: ButtonTheme.PRIMARY,
            },
        },
    },
    args: {
        children: 'Button',
        theme: ButtonTheme.PRIMARY,
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const ButtonLight: Story = {
    name: 'Light',
};
ButtonLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const ButtonDark: Story = {
    name: 'Dark',
};
ButtonDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ButtonDarkBlue: Story = {
    name: 'Dark Blue',
};
ButtonDarkBlue.decorators = [ThemeDecorator(Theme.DARK_BLUE)];
