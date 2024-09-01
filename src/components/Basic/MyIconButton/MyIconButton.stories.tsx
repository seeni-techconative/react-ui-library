import { Meta, StoryObj } from "@storybook/react";
import React from "react";

import FavoriteIcon from "@mui/icons-material/Favorite";

import MyIconButton from "./MyIconButton";

// Metadata about the story
const meta: Meta<typeof MyIconButton> = {
    title: "Components/Basic/MyIconButton",
    component: MyIconButton,
};

export default meta;

// Define a type for the story object
type Story = StoryObj<typeof MyIconButton>;

export const BasicIconButton: Story = {
    args: {
        children: (
            <>
                <FavoriteIcon />
            </>
        ),
        "aria-label": "favorite",
    },
};
