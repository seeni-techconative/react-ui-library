import React from "react";

import ListItemText, { ListItemTextProps } from "@mui/material/ListItemText";

export interface MyListItemTextProps extends ListItemTextProps {
    // Add any additional props here
}

const MyListItemText: React.FC<MyListItemTextProps> = (props) => {
    return <ListItemText {...props}>{props.children}</ListItemText>;
};

export default MyListItemText;
