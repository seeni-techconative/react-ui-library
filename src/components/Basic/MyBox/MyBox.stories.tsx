import { Meta, StoryObj } from "@storybook/react";

import MyBox from "./MyBox";

// Metadata about the story
const meta: Meta<typeof MyBox> = {
    title: "Components/Basic/MyBox",
    component: MyBox,
};

export default meta;

// Define a type for the story object
type Story = StoryObj<typeof MyBox>;

export const BasicBox: Story = {
    args: {
        children: "Basic Box",
        component: "section",
        sx: {
            border: "2px solid grey",
            height: "200px",
            width: "200px",
        },
    },
};

export const ColoredBox: Story = {
    args: {
        children: "Colored Box",
        component: "section",
        sx: {
            bgcolor: "primary.main",
            color: "white",
            height: "200px",
            width: "200px",
        },
    },
};
