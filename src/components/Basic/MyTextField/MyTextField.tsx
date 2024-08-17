import React from 'react';
import TextField, { TextFieldProps } from '@mui/material/TextField';

// export interface MyTextFieldProps extends TextFieldProps {
//     // Add any additional props here
// }

const MyTextField: React.FC<TextFieldProps> = (props) => {
    return (
        <TextField {...props} />
    );
};

export default MyTextField;
