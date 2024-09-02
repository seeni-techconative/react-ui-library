import { Meta, StoryObj } from "@storybook/react";
import React from "react";

import MyCardContent from "./MyCardContent";

// Metadata about the story
const meta: Meta<typeof MyCardContent> = {
    title: "Components/Basic/MyCardContent",
    component: MyCardContent,
};

export default meta;

// Define a type for the story object
type Story = StoryObj<typeof MyCardContent>;

export const BasicCardContent: Story = {
    args: {
        children: "Basic Card Content",
    },
};
