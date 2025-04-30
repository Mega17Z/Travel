import { useEffect, useState } from "react";
import CardSimule from "./components/simulation/simule";

const Reservation = () => {

    const [montab, setMonTab] = useState([])

    useEffect(() => {
        fetch('http://localhost:9000/vols')
        .then(res => res.json())
        .then(donner => {
            setMonTab(donner)
        })
    }, [])

    return ( 
        <div>
            <CardSimule tableau={montab} />
        </div>
     );
}
 
export default Reservation;