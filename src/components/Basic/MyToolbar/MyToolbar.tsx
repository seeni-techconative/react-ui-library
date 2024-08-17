import React from 'react';
import Toolbar, { ToolbarProps } from '@mui/material/Toolbar';

export interface MyToolbarProps extends ToolbarProps {
    // Add any additional props here
}

const MyToolbar: React.FC<MyToolbarProps> = (props) => {
    return (
        <Toolbar {...props}>
            {props.children}
        </Toolbar>
    );
};

export default MyToolbar;
