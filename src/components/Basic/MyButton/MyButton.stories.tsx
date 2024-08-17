// src/components/MyButton.stories.tsx
import { Meta, StoryObj } from '@storybook/react';
import MyButton from './MyButton';

// Metadata about the story
const meta: Meta<typeof MyButton> = {
    title: 'Components/Basic/MyButton',
    component: MyButton,
};

export default meta;

// Define a type for the story object
type Story = StoryObj<typeof MyButton>;

// Primary story
export const Primary: Story = {
    args: {
        children: 'Primary Button',
        color: 'primary',
    },
};

// Secondary story
export const Secondary: Story = {
    args: {
        children: 'Secondary Button',
        color: 'secondary',
    },
};
