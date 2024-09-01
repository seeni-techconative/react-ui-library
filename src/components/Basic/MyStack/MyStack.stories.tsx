import { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { MyCard } from "../MyCard";
import MyStack from "./MyStack";

// Metadata about the story
const meta: Meta<typeof MyStack> = {
    title: "Components/Basic/MyStack",
    component: MyStack,
};

export default meta;

// Define a type for the story object
type Story = StoryObj<typeof MyStack>;

export const BasicStack: Story = {
    args: {
        children: (
            <>
                <MyCard sx={{ padding: "1rem" }} variant="outlined">
                    Item 1
                </MyCard>
                <MyCard sx={{ padding: "1rem" }} variant="outlined">
                    Item 2
                </MyCard>
                <MyCard sx={{ padding: "1rem" }} variant="outlined">
                    Item 2
                </MyCard>
            </>
        ),
    },
};

export const HorizontalStack: Story = {
    args: {
        children: (
            <>
                <MyCard
                    sx={{ padding: "1rem", flexGrow: 1 }}
                    variant="outlined"
                >
                    Item 1
                </MyCard>
                <MyCard
                    sx={{ padding: "1rem", flexGrow: 1 }}
                    variant="outlined"
                >
                    Item 2
                </MyCard>
                <MyCard
                    sx={{ padding: "1rem", flexGrow: 1 }}
                    variant="outlined"
                >
                    Item 2
                </MyCard>
            </>
        ),
        direction: "row",
    },
};
