import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ClimaApp } from './climaApp'
import './styles/styles.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClimaApp/>
  </StrictMode>,
)
