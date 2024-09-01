import React from "react";

import Paper, { PaperProps } from "@mui/material/Paper";

export interface MyPaperProps extends PaperProps {
    // Add any additional props here
}

const MyPaper: React.FC<MyPaperProps> = (props) => {
    return <Paper {...props}>{props.children}</Paper>;
};

export default MyPaper;
