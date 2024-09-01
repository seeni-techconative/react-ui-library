import React from "react";

import Box, { BoxProps } from "@mui/material/Box";

export interface MyBoxProps extends BoxProps {
    // Add any additional props here
}

const MyBox: React.FC<MyBoxProps> = (props) => {
    return <Box {...props}>{props.children}</Box>;
};

export default MyBox;
