import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Liga as animações de “revelar ao rolar” só quando o JS roda (sem JS, tudo fica visível)
document.documentElement.classList.add('js')

const root = document.getElementById('root')
const app = <StrictMode><App /></StrictMode>

// HTML pré-renderizado no build (scripts/prerender.mjs) → hidratar; senão (npm run dev) → renderizar
if (root.hasChildNodes()) hydrateRoot(root, app)
else createRoot(root).render(app)
