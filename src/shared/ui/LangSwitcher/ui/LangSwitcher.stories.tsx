import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { LangSwitcher } from 'shared/ui/LangSwitcher';

const meta: Meta<typeof LangSwitcher> = {
    title: 'Shared/LangSwitcher/UI',
    component: LangSwitcher,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LangSwitcher>;

export const LangSwitcherLight: Story = {
    name: 'Light',
};
LangSwitcherLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const LangSwitcherDark: Story = {
    name: 'Dark',
};
LangSwitcherDark.decorators = [ThemeDecorator(Theme.DARK)];

export const LangSwitcherDarkBlue: Story = {
    name: 'Dark Blue',
};
LangSwitcherDarkBlue.decorators = [ThemeDecorator(Theme.DARK_BLUE)];
