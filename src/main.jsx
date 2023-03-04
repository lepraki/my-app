import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { GifExpert } from "./GifExpert"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <GifExpert/>
  </React.StrictMode>,
)