import './index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async'; // 1. Importamos el proveedor
import App from './App';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <HelmetProvider> {/* 2. Abrimos el proveedor */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider> {/* 3. Cerramos el proveedor */}
  </StrictMode>
);