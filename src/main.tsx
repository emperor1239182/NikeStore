import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Router } from './Router.tsx'
import { Authorization } from './Contexts.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Authorization>
    <Router>
    <App />
    </Router>
    </Authorization>
  </StrictMode>,
)
