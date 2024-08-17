import React from 'react';
import AppBar, { AppBarProps } from '@mui/material/AppBar';

export interface MyAppBarProps extends AppBarProps {
    // Add any additional props here
}

const MyAppBar: React.FC<MyAppBarProps> = (props) => {
    return (
        <AppBar {...props}>
            {props.children}
        </AppBar>
    );
};

export default MyAppBar;
