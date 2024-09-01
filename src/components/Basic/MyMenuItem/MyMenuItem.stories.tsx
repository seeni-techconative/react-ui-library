import { Meta, StoryObj } from "@storybook/react";

import MyMenuItem from "./MyMenuItem";

// Metadata about the story
const meta: Meta<typeof MyMenuItem> = {
    title: "Components/Basic/MyMenuItem",
    component: MyMenuItem,
};

export default meta;

// Define a type for the story object
type Story = StoryObj<typeof MyMenuItem>;

export const BasicMenuItem: Story = {
    args: {
        children: "Menu Item",
        onClick: () => alert("Menu item clicked!"),
    },
};
