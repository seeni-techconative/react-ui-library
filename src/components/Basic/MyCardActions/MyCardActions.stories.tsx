import { Meta, StoryObj } from "@storybook/react";
import React from "react";

import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

import MyCardActions from "./MyCardActions";

// Metadata about the story
const meta: Meta<typeof MyCardActions> = {
    title: "Components/Basic/MyCardActions",
    component: MyCardActions,
};

export default meta;

// Define a type for the story object
type Story = StoryObj<typeof MyCardActions>;

export const BasicCardActions: Story = {
    args: {
        children: (
            <>
                <NotificationsActiveIcon />
            </>
        ),
    },
};
