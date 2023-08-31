import type { Meta, StoryObj } from '@storybook/react';

import { Navbar } from 'widgets/Navbar';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof Navbar> = {
    title: 'Widgets/Navbar/UI',
    tags: ['autodocs'],
    component: Navbar,
    decorators: [
        StoreDecorator({}),
    ],
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const NavbarEl: Story = {
    name: 'Navbar',

};
NavbarEl.decorators = [ThemeDecorator(Theme.LIGHT)];

export const NavbarElDark: Story = {
    name: 'Navbar Dark',
};
NavbarElDark.decorators = [ThemeDecorator(Theme.DARK)];

export const NavbarElDarkBlue: Story = {
    name: 'Navbar Dark Blue',
};
NavbarElDarkBlue.decorators = [ThemeDecorator(Theme.DARK_BLUE)];
