import { useState, useEffect, useContext } from "react";
import AuthContext from "./Formulaire/AuthContext";

const useAffichageVols = (limit = null) => {
    const [vols, setVols] = useState([]);

    const {url} = useContext(AuthContext)

    useEffect(() => {
        fetch(`${url}/api/vols`)
            .then((res) => res.json())
            .then((donner) => {
                console.log(donner)
                const result = limit ? donner.slice(0, limit) : donner;
                setVols(result);
            })
            .catch((err) => console.error("Erreur lors du chargement des vols :", err));
    }, [limit]);

    return { vols };
};

export default useAffichageVols;


// import { useState, useEffect } from "react";

// const useAffichageVols = (limit = null) => {
//   const [vols, setVols] = useState([]);

//   useEffect(() => {
//     fetch(`https://api.aviationstack.com/v1/flights?access_key=b58bae2ccd71dc1ce231a67e97df4a93`)
//       .then((res) => res.json())
//       .then((donner) => {
//         console.log(donner);
    
//         const volsData = donner.data || [];
    
//         const volsFormatés = volsData.map((vol, index) => ({
//             id: index,
//             compagnie: vol.airline?.name || "Compagnie inconnue",
//             aeroportDepart: vol.departure?.airport || "Inconnu",
//             paysDepart: vol.departure?.timezone?.split("/")[1] || "Inconnu",
//             heureDepart: vol.departure?.scheduled || "Inconnue",
//             aeroportArrivee: vol.arrival?.airport || "Inconnu",
//             paysArrivee: vol.arrival?.timezone?.split("/")[1] || "Inconnu",
//             heureArrivee: vol.arrival?.scheduled || "Inconnue",
//         }));
    
//         const result = limit ? volsFormatés.slice(0, limit) : volsFormatés;
//         setVols(result);
//     })    
//     .catch((err) => console.error("Erreur lors du chargement des vols :", err));
//   }, [limit]);

//   return { vols };
// };

// export default useAffichageVols;
