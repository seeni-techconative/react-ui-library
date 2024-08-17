import { Meta, StoryObj } from '@storybook/react';
import MyDivider from './MyDivider';

// Metadata about the story
const meta: Meta<typeof MyDivider> = {
    title: 'Components/Basic/MyDivider',
    component: MyDivider,
};

export default meta;

// Define a type for the story object
type Story = StoryObj<typeof MyDivider>;

export const BasicDivider: Story = {
};