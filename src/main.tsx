import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "virtual:windi.css";
import "virtual:windi-devtools";
import "antd/dist/antd.css";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
