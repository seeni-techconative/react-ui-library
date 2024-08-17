import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import MyCardActions from './MyCardActions';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

// Metadata about the story
const meta: Meta<typeof MyCardActions> = {
    title: 'Components/Basic/MyCardActions',
    component: MyCardActions,
};

export default meta;

// Define a type for the story object
type Story = StoryObj<typeof MyCardActions>;

export const BasicCardActions: Story = {
    args: {
        children: <><NotificationsActiveIcon /></>
    },
};