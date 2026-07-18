import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import JSX from './App.jsx'
import Biryani from './components.jsx'
import Holi from './festival.jsx'
import Count from './Count.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <JSX/>
  <Biryani/>
  <Holi/>
  <Count/>
  </StrictMode>,
)
