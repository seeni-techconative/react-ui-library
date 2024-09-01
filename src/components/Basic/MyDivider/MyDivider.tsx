import React from "react";

import Divider, { DividerProps } from "@mui/material/Divider";

export interface MyDividerProps extends DividerProps {
    // Add any additional props here
}

const MyDivider: React.FC<MyDividerProps> = (props) => {
    return <Divider {...props}>{props.children}</Divider>;
};

export default MyDivider;
