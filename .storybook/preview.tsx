// .storybook/preview.tsx
import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Preview } from '@storybook/react';

const theme = createTheme({
  // Define your custom theme here
  palette: {
    primary: {
      main: '#1976d2',
    },
  },
});

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
