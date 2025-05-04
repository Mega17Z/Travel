import { createContext, useContext, useState } from "react";

// Création du contexte
const ReservationContext = createContext();

// Provider pour englober l'app
export const ReservationProvider = ({ children }) => {
  const [reservation, setReservation] = useState(null);

  return (
    <ReservationContext.Provider value={{ reservation, setReservation }}>
      {children}
    </ReservationContext.Provider>
  );
};

// Hook personnalisé pour utiliser le contexte facilement
export const useReservation = () => useContext(ReservationContext);
