import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import TodoProvider from './store/TodoProvider.tsx';

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <TodoProvider>
        <App />
      </TodoProvider>
    </StrictMode>
  );
} else {
  console.error('Element with id "root" not found');
}
