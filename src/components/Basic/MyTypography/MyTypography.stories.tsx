import { Meta, StoryObj } from "@storybook/react";

import MyTypography from "./MyTypography";

// Metadata about the story
const meta: Meta<typeof MyTypography> = {
    title: "Components/Basic/MyTypography",
    component: MyTypography,
};

export default meta;

// Define a type for the story object
type Story = StoryObj<typeof MyTypography>;

export const Header1: Story = {
    args: {
        children: `Header 1 - Font Size: 36px - Line Height: 45px`,
        variant: "h1",
    },
};

export const Header2: Story = {
    args: {
        children: `Header 2 - Font Size: 28px - Line Height: 35px`,
        variant: "h2",
    },
};

export const Header3: Story = {
    args: {
        children: `Header 3 - Font Size: 22px - Line Height: 28px`,
        variant: "h3",
    },
};

export const Header4: Story = {
    args: {
        children: `Header 4 - Font Size: 18px - Line Height: 22px`,
        variant: "h4",
    },
};

export const Header5: Story = {
    args: {
        children: `Header 5 - Font Size: 16px - Line Height: 20px`,
        variant: "h5",
    },
};

export const Header6: Story = {
    args: {
        children: `Header 6 - Font Size: 14px - Line Height: 18px`,
        variant: "h6",
    },
};

export const Body1: Story = {
    args: {
        children: `Body 1 - Font Size: 16px - Line Height: 24px`,
        variant: "body1",
    },
};

export const Body2: Story = {
    args: {
        children: `Body 1 - Font Size: 14px - Line Height: 21px`,
        variant: "body2",
    },
};

export const SubTitle1: Story = {
    args: {
        children: `SubTitle 1 - Font Size: 12px - Line Height: 18px`,
        variant: "subtitle1",
    },
};

export const SubTitle2: Story = {
    args: {
        children: `SubTitle 2 - Font Size: 10px - Line Height: 12px`,
        variant: "subtitle2",
    },
};
