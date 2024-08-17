// src/components/MyButton.tsx
import React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';

export interface MyButtonProps extends ButtonProps {
    // Add any additional props here
}

const MyButton: React.FC<MyButtonProps> = (props) => {
    return (
        <Button variant="contained" color="primary" {...props}>
            {props.children}
        </Button>
    );
};

export default MyButton;
