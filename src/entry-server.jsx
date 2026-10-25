/* Usado só no build (scripts/prerender.mjs) para gerar o HTML estático da página. */
import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App.jsx'

export function render() {
  return renderToString(<StrictMode><App /></StrictMode>)
}
