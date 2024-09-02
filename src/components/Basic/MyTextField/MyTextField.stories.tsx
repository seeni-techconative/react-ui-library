import { Meta, StoryObj } from "@storybook/react";

import MyTextField from "./MyTextField";

// Metadata about the story
const meta: Meta<typeof MyTextField> = {
    title: "Components/Basic/MyTextField",
    component: MyTextField,
};

export default meta;

// Define a type for the story object
type Story = StoryObj<typeof MyTextField>;

export const BasicTextField: Story = {
    args: {
        variant: "outlined",
        placeholder: "Enter your name",
    },
};
