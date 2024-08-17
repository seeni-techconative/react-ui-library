import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import MyTypography from './MyTypography';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

// Metadata about the story
const meta: Meta<typeof MyTypography> = {
    title: 'Components/Basic/MyTypography',
    component: MyTypography,
};

export default meta;

// Define a type for the story object
type Story = StoryObj<typeof MyTypography>;

export const BasicTypography: Story = {
    args: {
        children: "Basic Typography"
    },
};