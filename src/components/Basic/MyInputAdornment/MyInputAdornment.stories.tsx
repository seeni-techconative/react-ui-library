import { Meta, StoryObj } from "@storybook/react";
import React from "react";

import MyInputAdornment from "./MyInputAdornment";

// Metadata about the story
const meta: Meta<typeof MyInputAdornment> = {
    title: "Components/Basic/MyInputAdornment",
    component: MyInputAdornment,
};

export default meta;

// Define a type for the story object
type Story = StoryObj<typeof MyInputAdornment>;

export const BasicListItemIcon: Story = {
    args: {
        children: "kg",
        position: "start",
    },
};
