import React from 'react';
import Typography, { TypographyProps } from '@mui/material/Typography';

export interface MyTypographyProps extends TypographyProps {
    // Add any additional props here
}

const MyTypography: React.FC<MyTypographyProps> = (props) => {
    return (
        <Typography {...props}>
            {props.children}
        </Typography>
    );
};

export default MyTypography;
