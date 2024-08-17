import { Meta, StoryObj } from '@storybook/react';
import MyHeader from './MyHeader';

// Metadata about the story
const meta: Meta<typeof MyHeader> = {
    title: 'Components/Standard/MyHeader',
    component: MyHeader,
};

export default meta;

// Define a type for the story object
type Story = StoryObj<typeof MyHeader>;

export const StandardHeader: Story = {
    args: {
        children: "Toolbar"
    },
};