// import { useEffect, useState } from "react";
// import CardSimule from "./components/simulation/simule";
import Vols from "./components/travelCard/vols";
import useAffichageVols from "./components/useVols";
import { useLocation } from "react-router-dom";
// import Vols from "./Components/travelCard/vols";

const LesVols = () => {
    const { search } = useLocation()
    const parametres = new URLSearchParams(search)

    const depart = parametres.get("depart")
    const destination = parametres.get("destination")

    const { vols } = useAffichageVols(6)
    console.log(vols)

    const monFilter = (vols || []).filter((vol) => {
        const paysDepart = depart ? vol.paysDepart?.toLowerCase().includes(depart.toLowerCase()) : true;
        const paysArriver = destination ? vol.paysArrivee?.toLowerCase().includes(destination.toLowerCase()) : true;
        return paysDepart && paysArriver;
    });
    console.log(monFilter)
    

    return ( 
        <div>
            {/* <Vols tableau={monFilter} /> */}
            {/* <Vols tableau={monFilter} /> */}
            {/* <Vols tableau={monFilter} /> */}
            <Vols tableau={monFilter} />
        </div>
     );
}
 
export default LesVols;