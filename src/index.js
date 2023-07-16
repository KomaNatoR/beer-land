import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

// import { ThemeProvider } from '@emotion/react';
// import { theme, themeDark } from './constants';
import { ThemeProviderContext } from 'utils/themeSwitcher/ThemeProviderContext';
import EmotionThemeProvider from 'utils/themeSwitcher/EmotionThemeProvider';

import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/beer-land">

      <ThemeProviderContext>
        <EmotionThemeProvider>
          <App />
        </EmotionThemeProvider>
      </ThemeProviderContext>

    </BrowserRouter>
  </React.StrictMode>
);
