import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles.css';
import { RatingsProvider } from './RatingsContext';
import { AuthProvider } from './AuthContext';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <AuthProvider>
        <RatingsProvider>
            <App />
        </RatingsProvider>
    </AuthProvider>
);