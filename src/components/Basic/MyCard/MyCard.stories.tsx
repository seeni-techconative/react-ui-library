import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';

import MyCard from './MyCard';
import { MyCardContent } from '../MyCardContent';
import { MyTypography } from '../MyTypography';
import { MyCardActions } from '../MyCardActions';
import { MyButton } from '../MyButton';
import { MyDivider } from '../MyDivider';
import { MyAvatar } from '../MyAvatar';
import { MyCardHeader } from '../MyCardHeader';
import { MyIconButton } from '../MyIconButton';
import { MyCardMedia } from '../MyCardMedia';

// Metadata about the story
const meta: Meta<typeof MyCard> = {
    title: 'Components/Basic/MyCard',
    component: MyCard,
};

export default meta;

// Define a type for the story object
type Story = StoryObj<typeof MyCard>;

export const BasicCard: Story = {
    args: {
        children: <>
            Basic Card
        </>,
        sx: {
            width: "200px",
            padding: 2
        }
    },
};

export const OutlinedCard: Story = {
    args: {
        children: <>
            <MyCardContent>
                <MyTypography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Word of the Day
                </MyTypography>
                <MyTypography variant="h5" component="div">
                    My Card Content
                </MyTypography>
            </MyCardContent>

            <MyDivider />

            <MyCardActions>
                <MyButton size="small">Learn More</MyButton>
            </MyCardActions>
        </>,
        sx: {
            width: "300px",
            padding: 2
        },
        variant: "outlined"
    },
};


export const InteractionCard: Story = {
    args: {
        children: <>
            <MyCardHeader avatar={
                <MyAvatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    R
                </MyAvatar>
            } action={
                <MyIconButton aria-label="settings">
                    <MoreVertIcon />
                </MyIconButton>
            }
                title="Firstname Lastname"
                subheader="Joined on September 14, 2016"
            >
            </MyCardHeader>
            <MyCardMedia
                component="img"
                image="https://mui.com/static/images/cards/paella.jpg"
            />
            <MyCardContent>
                <MyTypography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                </MyTypography>
            </MyCardContent>
            <MyDivider />
            <MyCardActions disableSpacing>
                <MyIconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </MyIconButton>

                <MyIconButton aria-label="settings">
                    <ShareIcon />
                </MyIconButton>
            </MyCardActions>
        </>,
        sx: {
            width: "400px",
        },
        variant: "outlined"
    },
};