import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App.jsx'

// Used at build time to pre-render the page into static HTML (see scripts/prerender.js).
export function render() {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}
