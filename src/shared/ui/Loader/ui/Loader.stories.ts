import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Loader } from 'shared/ui/Loader';
import { CenterDecorator } from 'shared/config/storybook/CenterDecorator/CenterDecorator';

const meta: Meta<typeof Loader> = {
    title: 'Shared/Loader/UI',
    component: Loader,
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const LoaderLight: Story = {
    name: 'Light',
};
LoaderLight.decorators = [CenterDecorator, ThemeDecorator(Theme.LIGHT)];

export const LoaderDark: Story = {
    name: 'Dark',
};
LoaderDark.decorators = [CenterDecorator, ThemeDecorator(Theme.DARK)];

export const LoaderDarkBlue: Story = {
    name: 'Dark Blue',
};
LoaderDarkBlue.decorators = [CenterDecorator, ThemeDecorator(Theme.DARK_BLUE)];
