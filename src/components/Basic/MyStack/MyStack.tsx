import React from 'react';
import Stack, { StackProps } from '@mui/material/Stack';

export interface MyStackProps extends StackProps {
    // Add any additional props here
}

const MyStack: React.FC<MyStackProps> = (props) => {
    return (
        <Stack {...props}>
            {props.children}
        </Stack>
    );
};

export default MyStack;
