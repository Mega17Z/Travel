// import { useState } from "react";
import ContainerVols from "./containerVols";
import "./simule.css"

const CardSimule = ({tableau}) => {

    // const {aeroportArrivee,aeroportDepart,heureArrivee,heureDepart,id,paysArrivee,paysDepart} = tableau

    return ( 
        <div className="cardSimule">
            <h3 className="titre">Nos Vols</h3>
            {tableau.map((vol) => (<ContainerVols
             C={vol.numeroVol}
             Ad={vol.aeroportDepart}
             AA={vol.aeroportArrivee} 
             Hd={vol.heureDepart}
             Ha={vol.heureArrivee}
             id={vol.id}
             Pd={vol.paysDepart}
             Pa={vol.paysArrivee}
            />))}
        </div>
     );
}
 
export default CardSimule;