// .storybook/preview.tsx
import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Preview } from '@storybook/react';

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
