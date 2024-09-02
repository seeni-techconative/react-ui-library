import { Meta, StoryObj } from "@storybook/react";
import React from "react";

import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

import MyListItemIcon from "./MyListItemIcon";

// Metadata about the story
const meta: Meta<typeof MyListItemIcon> = {
    title: "Components/Basic/MyListItemIcon",
    component: MyListItemIcon,
};

export default meta;

// Define a type for the story object
type Story = StoryObj<typeof MyListItemIcon>;

export const BasicListItemIcon: Story = {
    args: {
        children: (
            <>
                <NotificationsActiveIcon />
            </>
        ),
    },
};
