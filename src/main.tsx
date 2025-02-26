import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' // ✅ To‘g‘ri import
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render( // ✅ To‘g‘ri ishlatilgan
  <StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </StrictMode>
)
