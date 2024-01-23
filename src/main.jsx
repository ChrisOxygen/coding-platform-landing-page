import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './sass/main.scss'
import { DataProvider } from './DataProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataProvider>

    <App />
    </DataProvider>
  </React.StrictMode>,
)
