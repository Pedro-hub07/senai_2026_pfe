import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import { TemaProvedor } from './contexts/temaContexto.jsx'
import './estilos.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TemaProvedor>
      <App />
    </TemaProvedor>
  </StrictMode>,
)
