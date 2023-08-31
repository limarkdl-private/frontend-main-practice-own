import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.css';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Sidebar } from './Sidebar';

const meta: Meta<typeof Sidebar> = {
    title: 'Widgets/Sidebar/UI',
    tags: ['autodocs'],
    component: Sidebar,
    argTypes: {
        isCollapsed: { control: 'boolean' },
    },
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const SidebarEl: Story = {
    name: 'Light',
};
SidebarEl.decorators = [ThemeDecorator(Theme.LIGHT)];

export const SidebarElDark: Story = {
    name: 'Dark',
};
SidebarElDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SidebarElDarkBlue: Story = {
    name: 'Dark Blue',
};
SidebarElDarkBlue.decorators = [ThemeDecorator(Theme.DARK_BLUE)];
