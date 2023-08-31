import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import Modal from 'shared/ui/Modal/Modal';

const meta: Meta<typeof Modal> = {
    title: 'Shared/Modal/UI',
    component: Modal,
    args: {
        isOpen: true,
        children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, aliquid animi aperiam consectetur dicta dolorum ex exercitationem explicabo fugit laudantium molestiae nihil nisi nobis numquam quis similique ut veritatis voluptates.\n',
    },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const ModalEl: Story = {
    name: 'Light',
};
ModalEl.decorators = [ThemeDecorator(Theme.LIGHT)];

export const ModalElDark: Story = {
    name: 'Dark',
};
ModalElDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ModalElDarkBlue: Story = {
    name: 'Dark Blue',

};
ModalElDarkBlue.decorators = [ThemeDecorator(Theme.DARK_BLUE)];
