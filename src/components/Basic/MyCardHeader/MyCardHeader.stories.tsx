import { Meta, StoryObj } from "@storybook/react";
import React from "react";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import { red } from "@mui/material/colors";

import MyAvatar from "../MyAvatar/MyAvatar";
import { MyIconButton } from "../MyIconButton";
import MyCardHeader from "./MyCardHeader";

// Metadata about the story
const meta: Meta<typeof MyCardHeader> = {
    title: "Components/Basic/MyCardHeader",
    component: MyCardHeader,
};

export default meta;

// Define a type for the story object
type Story = StoryObj<typeof MyCardHeader>;

export const BasicCardHeader: Story = {
    args: {
        avatar: (
            <MyAvatar
                sx={{
                    bgcolor: red[500],
                }}
                aria-label="recipe"
            />
        ),
        action: (
            <MyIconButton>
                <MoreVertIcon />
            </MyIconButton>
        ),
        sx: {
            width: "400px",
            border: "1px solid #ccc",
        },
        title: "Firstname Lastname",
        subheader: "Joined on September 14, 2016",
    },
};
