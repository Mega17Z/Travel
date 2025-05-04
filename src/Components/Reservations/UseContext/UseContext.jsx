import { createContext, useContext, useState } from "react";

const ContextReservation = createContext();
export const UseContext = ({children}) => {
    const [reservation, setReservation] = useState({
        nom:"",
        prenom:"",
        email:"",
        telephone:""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setReservation((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const values={reservation, setReservation, handleChange};

    return <ContextReservation.Provider value={values}>{children}</ContextReservation.Provider>;
}

export const UseReservation = ()=> useContext(ContextReservation)