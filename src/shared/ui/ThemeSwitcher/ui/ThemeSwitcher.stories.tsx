import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';

const meta: Meta<typeof ThemeSwitcher> = {
    title: 'Shared/ThemeSwitcher/UI',
    component: ThemeSwitcher,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ThemeSwitcher>;

export const ThemeSwitcherLight: Story = {
    name: 'Light',
};
ThemeSwitcherLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const ThemeSwitcherDark: Story = {
    name: 'Dark',
};
ThemeSwitcherDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ThemeSwitcherDarkBlue: Story = {
    name: 'Dark Blue',
};
ThemeSwitcherDarkBlue.decorators = [ThemeDecorator(Theme.DARK_BLUE)];
