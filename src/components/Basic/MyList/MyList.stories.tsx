import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import LoginIcon from '@mui/icons-material/Login';
import DraftsIcon from '@mui/icons-material/Drafts';

import MyList from './MyList';

import { MyListItemButton } from '../MyListItemButton';
import { MyListItemIcon } from '../MyListItemIcon';
import { MyListItemText } from '../MyListItemText';
import { MyListItem } from '../MyListItem';
import { MyBox } from '../MyBox';
import MyDivider from '../MyDivider/MyDivider';

// Metadata about the story
const meta: Meta<typeof MyList> = {
    title: 'Components/Basic/MyList',
    component: MyList,
};

export default meta;

// Define a type for the story object
type Story = StoryObj<typeof MyList>;

export const BasicList: Story = {
    decorators: () => (
        <MyBox sx={{ width: '100%', bgcolor: '#f7f7f7', padding: 10 }}>
            <nav aria-label="main mailbox folders">
                <MyList sx={{ backgroundColor: "white", width: "200px" }}>
                    <MyListItem disablePadding>
                        <MyListItemButton>
                            <MyListItemIcon>
                                <LoginIcon />
                            </MyListItemIcon>
                            <MyListItemText primary="Login" />
                        </MyListItemButton>
                    </MyListItem>

                    <MyListItem disablePadding>
                        <MyListItemButton>
                            <MyListItemIcon>
                                <DraftsIcon />
                            </MyListItemIcon>
                            <MyListItemText primary="Drafts" />
                        </MyListItemButton>
                    </MyListItem>

                    <MyDivider />

                    <MyListItem disablePadding>
                        <MyListItemButton>
                            <MyListItemText primary="Trash" />
                        </MyListItemButton>
                    </MyListItem>

                    <MyListItem disablePadding>
                        <MyListItemButton>
                            <MyListItemText primary="Spam" />
                        </MyListItemButton>
                    </MyListItem>
                </MyList>
            </nav>
        </MyBox>
    ),
};