import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Front from './pages/Front.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <Front/>
    </ThemeProvider>
  </StrictMode>,
)
