import { StrictMode } from 'react' // Importing StrictMode for highlighting potential problems in the application
import { createRoot } from 'react-dom/client' // Importing createRoot for rendering the React application into the DOM
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
