import React from 'react';
import Card, { CardProps } from '@mui/material/Card';

export interface MyCardProps extends CardProps {
    // Add any additional props here
}

const MyCard: React.FC<MyCardProps> = (props) => {
    return (
        <Card {...props}>
            {props.children}
        </Card>
    );
};

export default MyCard;
