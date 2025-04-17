import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles/index.css'
import { Provider } from "react-redux";
import { Store } from "./store/store";
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
  <StrictMode>
    <App />
  </StrictMode>
  </Provider>
)
