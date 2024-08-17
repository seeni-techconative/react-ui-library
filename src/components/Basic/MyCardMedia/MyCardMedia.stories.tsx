import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import MyCardMedia from './MyCardMedia';

// Metadata about the story
const meta: Meta<typeof MyCardMedia> = {
    title: 'Components/Basic/MyCardMedia',
    component: MyCardMedia,
};

export default meta;

// Define a type for the story object
type Story = StoryObj<typeof MyCardMedia>;

export const BasicCardMedia: Story = {
    args: {
        component: "img",
        image: "https://mui.com/static/images/cards/paella.jpg",
        sx: {
            width: "300px",
            height: "auto"
        }
    },
};