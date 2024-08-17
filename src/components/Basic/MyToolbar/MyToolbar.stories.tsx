import { Meta, StoryObj } from '@storybook/react';
import MyToolbar from './MyToolbar';

// Metadata about the story
const meta: Meta<typeof MyToolbar> = {
    title: 'Components/Basic/MyToolbar',
    component: MyToolbar,
};

export default meta;

// Define a type for the story object
type Story = StoryObj<typeof MyToolbar>;

export const BasicToolbar: Story = {
    args: {
        children: "Toolbar"
    },
};