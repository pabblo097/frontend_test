import './global-styles.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.tsx';
import { AppContextProvider } from './contexts/AppContext.tsx';
import { ModalContextProvider } from './contexts/ModalContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
   <React.StrictMode>
      <ModalContextProvider>
         <AppContextProvider>
            <App />
         </AppContextProvider>
      </ModalContextProvider>
   </React.StrictMode>,
);
