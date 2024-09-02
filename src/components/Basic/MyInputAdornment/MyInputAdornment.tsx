import React from "react";

import InputAdornment, {
    InputAdornmentProps,
} from "@mui/material/InputAdornment";

export interface MyInputAdornmentProps extends InputAdornmentProps {
    // Add any additional props here
}

const MyInputAdornment: React.FC<MyInputAdornmentProps> = (props) => {
    return <InputAdornment {...props}>{props.children}</InputAdornment>;
};

export default MyInputAdornment;
