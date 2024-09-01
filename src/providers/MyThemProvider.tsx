import { Global } from "@emotion/react";
import React, { ReactNode } from "react";

import { Theme, ThemeProvider } from "@mui/material";

import { MY_THEME } from "../theme";
import globalStyles from "./custom-font-styles";

interface MyThemeProviderProps {
    children: ReactNode;
    theme?: Theme; // Allow theme to be optional with a default value
}

const MyThemeProvider: React.FC<MyThemeProviderProps> = ({
    theme = MY_THEME,
    children,
}) => {
    return (
        <ThemeProvider theme={theme}>
            <Global styles={globalStyles} />

            {children}
        </ThemeProvider>
    );
};

export default MyThemeProvider;
