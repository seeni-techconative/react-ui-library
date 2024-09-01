import React from "react";

import IconButton, { IconButtonProps } from "@mui/material/IconButton";

export interface MyIconButtonProps extends IconButtonProps {
    // Add any additional props here
}

const MyIconButton: React.FC<MyIconButtonProps> = (props) => {
    return <IconButton {...props}>{props.children}</IconButton>;
};

export default MyIconButton;
