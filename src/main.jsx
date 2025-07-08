import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Container from './assets/hello-world/Container.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Container>
    </Container>
  </StrictMode>,
)
