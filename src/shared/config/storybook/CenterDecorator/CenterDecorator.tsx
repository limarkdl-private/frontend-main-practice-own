import { StoryFn } from '@storybook/react';

export const CenterDecorator = (Story: StoryFn) => (
    <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
    }}
    >
        <Story />
    </div>
);
