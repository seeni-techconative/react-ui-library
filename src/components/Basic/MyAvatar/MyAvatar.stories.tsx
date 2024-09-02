import { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { red } from "@mui/material/colors";

import MyAvatar from "./MyAvatar";

// Metadata about the story
const meta: Meta<typeof MyAvatar> = {
    title: "Components/Basic/MyAvatar",
    component: MyAvatar,
};

export default meta;

// Define a type for the story object
type Story = StoryObj<typeof MyAvatar>;

export const BasicAvatar: Story = {
    args: {
        children: "R",
        sx: {
            bgcolor: red[500],
        },
        "aria-label": "recipe",
    },
};
