import { Meta, StoryObj } from '@storybook/react';
import MyAppBar from './MyAppBar';

// Metadata about the story
const meta: Meta<typeof MyAppBar> = {
    title: 'Components/Basic/MyAppBar',
    component: MyAppBar,
};

export default meta;

// Define a type for the story object
type Story = StoryObj<typeof MyAppBar>;

export const BasicAppBar: Story = {
    args: {
        children: "Appbar"
    },
};