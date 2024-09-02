import { Meta, StoryObj } from "@storybook/react";
import React from "react";

import MyListItemText from "./MyListItemText";

// Metadata about the story
const meta: Meta<typeof MyListItemText> = {
    title: "Components/Basic/MyListItemText",
    component: MyListItemText,
};

export default meta;

// Define a type for the story object
type Story = StoryObj<typeof MyListItemText>;

export const BasicListItemText: Story = {
    args: {
        primary: "Basic List Item Text",
    },
};
