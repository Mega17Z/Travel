import { useEffect, useState } from "react";
import "./reservation.css"
import PartReserve from "./partReserve";

const MaReservation = () => {
    const [maReserve, setReserve] = useState([])

    useEffect(() => {
        fetch('http://192.168.68.194:3700/api/reservations')
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