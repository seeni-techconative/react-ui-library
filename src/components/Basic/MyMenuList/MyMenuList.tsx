import React from 'react';
import MenuList, { MenuListProps } from '@mui/material/MenuList';

export interface MyMenuListProps extends MenuListProps {
    // Add any additional props here
}

const MyMenuList: React.FC<MyMenuListProps> = (props) => {
    return (
        <MenuList {...props}>
            {props.children}
        </MenuList>
    );
};

export default MyMenuList;
