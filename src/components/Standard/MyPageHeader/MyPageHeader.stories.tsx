import { Meta, StoryObj } from '@storybook/react';
import MyPageHeader from './MyPageHeader';

// Metadata about the story
const meta: Meta<typeof MyPageHeader> = {
    title: 'Components/Standard/MyPageHeader',
    component: MyPageHeader,
};

export default meta;

// Define a type for the story object
type Story = StoryObj<typeof MyPageHeader>;

export const StandardHeader: Story = {
};