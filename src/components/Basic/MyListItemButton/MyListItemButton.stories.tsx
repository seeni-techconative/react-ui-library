import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import MyListItemButton from './MyListItemButton';
import LoginIcon from '@mui/icons-material/Login';

import { MyListItemText } from '../MyListItemText';
import { MyListItemIcon } from '../MyListItemIcon';

// Metadata about the story
const meta: Meta<typeof MyListItemButton> = {
    title: 'Components/Basic/MyListItemButton',
    component: MyListItemButton,
};

export default meta;

// Define a type for the story object
type Story = StoryObj<typeof MyListItemButton>;

export const BasicListItemButton: Story = {
    args: {
        children: <>
            <MyListItemIcon>
                <LoginIcon />
            </MyListItemIcon>
            <MyListItemText primary="Login" />
        </>,
        selected: true,
        sx: {
            width: "200px"
        }
    },
};