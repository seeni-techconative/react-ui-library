import React from "react";

import MenuItem, { MenuItemProps } from "@mui/material/MenuItem";

export interface MyMenuItemProps extends MenuItemProps {
    // Add any additional props here
}

const MyMenuItem: React.FC<MyMenuItemProps> = (props) => {
    return <MenuItem {...props}>{props.children}</MenuItem>;
};

export default MyMenuItem;
