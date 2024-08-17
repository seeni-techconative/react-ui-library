import React from 'react';
import CardContent, { CardContentProps } from '@mui/material/CardContent';

export interface MyCardContentProps extends CardContentProps {
    // Add any additional props here
}

const MyCardContent: React.FC<MyCardContentProps> = (props) => {
    return (
        <CardContent {...props}>
            {props.children}
        </CardContent>
    );
};

export default MyCardContent;
