// .storybook/preview.tsx
import { Preview } from "@storybook/react";
import React from "react";

import CssBaseline from "@mui/material/CssBaseline";

import { MyThemeProvider } from "../src/providers";

const preview: Preview = {
    decorators: [
        (Story) => (
            <>
                <MyThemeProvider>
                    <CssBaseline />
                    <Story />
                </MyThemeProvider>
            </>
        ),
    ],
};

export default preview;
