import React from "react";

import ListItem, { ListItemProps } from "@mui/material/ListItem";

export interface MyListItemProps extends ListItemProps {
    // Add any additional props here
}

const MyListItem: React.FC<MyListItemProps> = (props) => {
    return <ListItem {...props}>{props.children}</ListItem>;
};

export default MyListItem;
