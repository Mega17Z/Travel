import { useEffect, useState } from "react";
import "./reservation.css"
import PartReserve from "./partReserve";
// import AuthContext from "../Formulaire/AuthContext";

const MaReservation = () => {
    const [maReserve, setReserve] = useState([])

    // const {url} = AuthContext()

    useEffect(() => {
        fetch(`http://localhost:3700/api/reservations`)
        .then(res => res.json())
        .then(donner => {
            console.log(donner)
            setReserve(donner)
        })
    }, [])

    return ( 
        <div>
            {maReserve.length === 0 ? <p>Aucune Reservation</p> :maReserve.map((info) => (<PartReserve information={info} key={info.id} />))} 
        </div>
     );
}
 
export default MaReservation;