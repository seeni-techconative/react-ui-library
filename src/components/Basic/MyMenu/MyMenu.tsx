import React from "react";

import Menu, { MenuProps } from "@mui/material/Menu";

export interface MyMenuProps extends MenuProps {
    // Add any additional props here
}

const MyMenu: React.FC<MyMenuProps> = (props) => {
    return <Menu {...props}>{props.children}</Menu>;
};

export default MyMenu;
