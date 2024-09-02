import React from "react";

import CardHeader, { CardHeaderProps } from "@mui/material/CardHeader";

export interface MyCardHeaderProps extends CardHeaderProps {
    // Add any additional props here
}

const MyCardHeader: React.FC<MyCardHeaderProps> = (props) => {
    return <CardHeader {...props}>{props.children}</CardHeader>;
};

export default MyCardHeader;
