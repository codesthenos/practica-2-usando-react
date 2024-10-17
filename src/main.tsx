import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './styles/common/normalize.css'
import './styles/common/variables.css'
import './index.css'

createRoot(document.getElementById('root') as HTMLElement).render(
  <App />
)
