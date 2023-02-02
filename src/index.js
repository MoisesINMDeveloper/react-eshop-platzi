import React from 'react';
import {StrictMode} from 'react';
import App from './routes/App';
import {createRoot} from 'react-dom/client';


const rootElement = document.getElementById('app');
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <App />
    </StrictMode>,
);