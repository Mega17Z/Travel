import Foot from "./Components/Footer/foot";
import InputSearch from "./components/InputSearch";
import RechercheVols from "./Components/rechercheVol/rechercheVol";
import Vols from "./Components/travelCard/vols";
import useAffichageVols from "./Components/useVols";
import { useLocation } from "react-router-dom";

const LesVols = () => {
    const { search } = useLocation()
    const parametres = new URLSearchParams(search)

    const depart = parametres.get("depart")
    const destination = parametres.get("destination")

    const { vols } = useAffichageVols()

    const monFilter = (!depart && !destination) ? [] : vols.filter((vol) => {
      const departMatch = depart
        ? (vol.paysDepart?.toLowerCase().includes(depart.toLowerCase()) ||
           vol.aeroportDepart?.toLowerCase().includes(depart.toLowerCase()))
        : true;

      const arriveeMatch = destination
        ? (vol.paysArrivee?.toLowerCase().includes(destination.toLowerCase()) ||
           vol.aeroportArrivee?.toLowerCase().includes(destination.toLowerCase()))
        : true;

      return departMatch && arriveeMatch;
    });


    

    return ( 
        <div className="lareserve">
            <InputSearch />
            <RechercheVols />
            {
            monFilter.length === 0 ? <p style={{ textAlign: "center", marginTop: "2rem" }}>Aucun Vol Trouver ou Rechercher</p> : 
            <Vols tableau={monFilter} afficheButton={false} titre={"Recherches"} />
            }
            <Vols tableau={vols} afficheButton={false} titre={"Nos Vols"} />
            <Foot />
        </div>
     );
}
 
export default LesVols;