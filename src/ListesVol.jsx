// import { useEffect, useState } from "react";
import CardSimule from "./components/simulation/simule";
import useAffichageVols from "./components/useVols";
import { useLocation } from "react-router-dom";

const LesVols = () => {
    const { search } = useLocation()
    const parametres = new URLSearchParams(search)

    const depart = parametres.get("depart")
    const destination = parametres.get("destination")

    const { vols } = useAffichageVols()

    const monFilter = (vols || []).filter((vol) => {
        const paysDepart = depart ? vol.paysDepart.toLowerCase().includes(depart.toLowerCase()) : true;
        const paysArriver = destination ? vol.paysArriver.toLowerCase().includes(destination.toLowerCase()) : true;
        return paysDepart && paysArriver;
    });
    

    return ( 
        <div>
            <CardSimule tableau={monFilter} />
            {/* <CardSimule tableau={vols} /> */}
        </div>
     );
}
 
export default LesVols;