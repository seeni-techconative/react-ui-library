import { Meta, StoryObj } from "@storybook/react";
import React from "react";

import InboxIcon from "@mui/icons-material/Inbox";

import { MyListItemButton } from "../MyListItemButton";
import { MyListItemIcon } from "../MyListItemIcon";
import { MyListItemText } from "../MyListItemText";
import MyListItem from "./MyListItem";

// Metadata about the story
const meta: Meta<typeof MyListItem> = {
    title: "Components/Basic/MyListItem",
    component: MyListItem,
};

export default meta;

// Define a type for the story object
type Story = StoryObj<typeof MyListItem>;

export const BasicListItem: Story = {
    args: {
        children: (
            <MyListItemButton sx={{ width: "200px" }}>
                <MyListItemIcon sx={{ width: "auto" }}>
                    <InboxIcon />
                </MyListItemIcon>
                <MyListItemText primary="Inbox" />
            </MyListItemButton>
        ),
        disablePadding: true,
        sx: {
            width: "200px",
            backgroundColor: "#fff",
        },
        alignItems: "center",
    },
};
