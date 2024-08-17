import React from 'react';
import CardMedia, { CardMediaProps } from '@mui/material/CardMedia';

export interface MyCardMediaProps extends CardMediaProps {
    // Add any additional props here
}

const MyCardMedia: React.FC<MyCardMediaProps> = (props) => {
    return (
        <CardMedia {...props}>
            {props.children}
        </CardMedia>
    );
};

export default MyCardMedia;
