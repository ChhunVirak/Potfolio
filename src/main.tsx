import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { CssBaseline, ThemeProvider } from '@mui/material';

import BreakpointsProvider from './providers/useBreakpoints.tsx';
import { theme } from './theme/theme.ts';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BreakpointsProvider>
        <CssBaseline />
        <App />
      </BreakpointsProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
