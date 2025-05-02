import MaReservation from "./Components/maReservation/reservation";
import './Components/maReservation/reservation.css'


const Reservation = () => {
    return(
        <div className="reserve">
            <h4>Mes Reservations</h4>
            <MaReservation />
        </div>
    )
}
 
export default Reservation;