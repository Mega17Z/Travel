const ContainerVols = ({Ad,AA,Hd,Ha,id,Pd,Pa,C}) => {

    return ( 
        <div className="containerVols">
                <h4>{C}</h4>
                <div className="containe" key={id}>
                    <div className="informations">
                        <div className="left">
                            <p>{Ad}</p>
                            <p>{Hd}</p>
                            <p>{Pd}</p>
                        </div>
                        <span className="bar"></span>
                        <div className="right">
                            <p>{AA}</p>
                            <p>{Ha}</p>
                            <p>{Pa}</p>
                        </div>
                    </div>
                    <div className="placeReserve">
                        <h5>Places Restants</h5>
                        <h3>18</h3>
                        <button>Reserver</button>
                    </div>
                </div>
            </div>
     );
}
 
export default ContainerVols;


// import React, { useEffect, useState } from "react";
// Si ton fichier est local
// import volsData from "../data/api.json";

// const ContainerVols = () => {
//   const [vols, setVols] = useState([]);

//   useEffect(() => {
//     // Si tu veux simuler un fetch avec un JSON local
//     setVols(volsData.slice(0, 3)); // les 3 premiers vols
//   }, []);

//   return (
//     <div className="containerVols">
//       {vols.map((vol) => (
//         <div key={vol.id} className="containe">
//           <h4>{vol.compagnie}</h4>
//           <div className="informations">
//             <div className="left">
//               <p>Pays: {vol.depart.pays}</p>
//               <p>Heure: {vol.depart.heure}</p>
//               <p>Lieu: {vol.depart.lieu}</p>
//             </div>
//             <span className="bar"></span>
//             <div className="right">
//               <p>Pays: {vol.arrivee.pays}</p>
//               <p>Heure: {vol.arrivee.heure}</p>
//               <p>Lieu: {vol.arrivee.lieu}</p>
//             </div>
//           </div>
//           <div className="placeReserve">
//             <h5>Places restantes</h5>
//             <h3>{vol.placesRestantes}</h3>
//             <button>Réserver</button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ContainerVols;
