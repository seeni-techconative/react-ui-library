import React from 'react';
import ListItemButton, { ListItemButtonProps } from '@mui/material/ListItemButton';

export interface MyListItemButtonProps extends ListItemButtonProps {
    // Add any additional props here
}

const MyListItemButton: React.FC<MyListItemButtonProps> = (props) => {
    return (
        <ListItemButton {...props}>
            {props.children}
        </ListItemButton>
    );
};

export default MyListItemButton;
