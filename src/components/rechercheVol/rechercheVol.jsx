import "./Recherche.css"
// import { FiExternalLink } from 'react-icons/fi';
import { FaPlaneDeparture, FaPlaneArrival, FaUser } from 'react-icons/fa';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RechercheVols = () => {
    const [depart, setDepart] = useState("")
    const [destination, setDestinations] = useState("")

    const navigate = useNavigate()

    const MyRecherche = (e) => {
        e.preventDefault()
        navigate(`/ListesVol?depart=${depart}&destination=${destination}`)
    }

    return ( 
        <div className="sectionVol">
            <h5>Acheter un billet</h5>
            <form onSubmit={MyRecherche}>
                {/* <div className="part">
                    <FiExternalLink />
                    <select>
                        <option value="">Aller - Retour</option>
                        <option value="">Aller Simple</option>
                    </select>
                </div> */}
                <div className="part">
                    <FaPlaneDeparture />
                    <input type="text" placeholder="Départ" value={depart} onChange={(e) => setDepart(e.target.value)} />
                </div>
                <div className="part">
                    <FaPlaneArrival />
                    <input type="text" placeholder="Destinations" value={destination} onChange={(e) => setDestinations(e.target.value)} />
                </div>
                {/* <div className="part">
                    <input type="date" />
                    <input type="date" />
                </div> */}
                {/* <div className="part">
                    <FaUser />
                    <select>
                        <option value="1">1 Personne</option>
                        <option value="2">2 Personnes</option>
                        <option value="3">3 Personnes</option>
                        <option value="4">4 Personnes</option>
                        <option value="5">5 Personnes</option>
                        <option value="6">6 Personnes</option>
                        <option value="7">7 Personnes</option>
                        <option value="8">8 Personnes</option>
                        <option value="9">9 Personnes</option>
                    </select>
                </div> */}
                <button type="submit">Recherche</button>
            </form>
        </div>
     );
}
 
export default RechercheVols;