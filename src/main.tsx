import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
// i18n
import '@/modules/i18n.ts'
//UnoCSS
import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'

ReactDOM.createRoot(document.querySelector('#root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
