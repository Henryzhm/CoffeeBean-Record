import React from 'react';
import ReactDOM from 'react-dom/client'; // 注意这里的 'react-dom/client'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // 使用 createRoot
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
