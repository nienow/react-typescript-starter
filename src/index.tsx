import React from 'react';
import {createRoot} from "react-dom/client";
import {DebugProvider} from "providers/DebugProvider";
import MultiThemeProvider from "providers/MultiThemeProvider";
import {GlobalStyle} from "providers/GlobalStyle";
import {DialogProvider} from "providers/DialogProvider";
import I18nProvider from "providers/I18nProvider";
import App from "App";

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DebugProvider>
      <MultiThemeProvider>
        <GlobalStyle></GlobalStyle>
        <DialogProvider>
          <I18nProvider>
            <App/>
          </I18nProvider>
        </DialogProvider>
      </MultiThemeProvider>
    </DebugProvider>
  </React.StrictMode>
);
