import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import MyListItemIcon from './MyListItemIcon';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

// Metadata about the story
const meta: Meta<typeof MyListItemIcon> = {
    title: 'Components/Basic/MyListItemIcon',
    component: MyListItemIcon,
};

export default meta;

// Define a type for the story object
type Story = StoryObj<typeof MyListItemIcon>;

export const BasicListItemIcon: Story = {
    args: {
        children: <><NotificationsActiveIcon /></>
    },
};