import React from "react";

import ListItemIcon, { ListItemIconProps } from "@mui/material/ListItemIcon";

export interface MyListItemIconProps extends ListItemIconProps {
    // Add any additional props here
}

const MyListItemIcon: React.FC<MyListItemIconProps> = (props) => {
    return <ListItemIcon {...props}>{props.children}</ListItemIcon>;
};

export default MyListItemIcon;
