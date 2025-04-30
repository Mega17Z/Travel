// import { useState } from "react";
import ContainerVols from "./containerVols";
import "./simule.css"

const CardSimule = ({tableau}) => {

    return ( 
        <div className="cardSimule">
            <h3 className="titre">Nos Vols</h3>
            {tableau.map((vol, index) => (<ContainerVols
             C={vol.numeroVol}
             Ad={vol.aeroportDepart}
             AA={vol.aeroportArrivee} 
             Hd={vol.heureDepart}
             Ha={vol.heureArrivee}
             id={vol.id}
             Pd={vol.paysDepart}
             Pa={vol.paysArrivee}
             key={vol.id ?? index}
            />))}
        </div>
     );
}
 
export default CardSimule;