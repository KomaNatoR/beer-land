import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from '@emotion/react';
import { theme } from 'constants/theme';

import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/beer-land">
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
