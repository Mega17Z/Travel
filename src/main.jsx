import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { FormProvider } from "./Components/Formulaire/FormContext.jsx"
import { AuthProvider } from './Components/Formulaire/AuthContext.jsx'
import { ReservationProvider } from './Components/ReservationContext.jsx'

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
