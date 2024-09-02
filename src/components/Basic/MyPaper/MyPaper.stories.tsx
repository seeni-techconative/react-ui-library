import { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { MyTypography } from "../MyTypography";
import MyPaper from "./MyPaper";

// Metadata about the story
const meta: Meta<typeof MyPaper> = {
    title: "Components/Basic/MyPaper",
    component: MyPaper,
};

export default meta;

// Define a type for the story object
type Story = StoryObj<typeof MyPaper>;

export const BasicPaper: Story = {
    args: {
        children: (
            <>
                <MyTypography variant="h4">Basic Paper</MyTypography>
            </>
        ),
        sx: {
            p: 2,
        },
    },
};
