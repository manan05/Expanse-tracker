import React from "react";
import App from "./App";
import { createRoot } from 'react-dom/client';

// importing strcit mode
import { StrictMode } from "react";


const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);