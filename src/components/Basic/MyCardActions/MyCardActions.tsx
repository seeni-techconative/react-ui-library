import React from "react";

import CardActions, { CardActionsProps } from "@mui/material/CardActions";

export interface MyCardActionsProps extends CardActionsProps {
    // Add any additional props here
}

const MyCardActions: React.FC<MyCardActionsProps> = (props) => {
    return <CardActions {...props}>{props.children}</CardActions>;
};

export default MyCardActions;
