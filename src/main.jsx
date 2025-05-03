import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { FormProvider } from "./components/Formulaire/FormContext.jsx"
import { AuthProvider } from './components/Formulaire/AuthContext.jsx'
import { ReservationProvider } from './components/ReservationContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <FormProvider>
    <ReservationProvider>
    <App />
    </ReservationProvider>
    </FormProvider>
    </AuthProvider>
  </StrictMode>,
)
