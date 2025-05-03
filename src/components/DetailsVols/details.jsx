// // import useAffichageVols from '../useVols';
// import './details.css';
// import { useNavigate, useParams } from 'react-router-dom';
// import data from '../../../data/api.json'
// import { useEffect, useState } from 'react'

// const DetailsVols = () => {
//     const { id } = useParams();
//     // const { vols } = useAffichageVols('http://localhost:9000/vols');

//     const [vol, setVol] = useState(null);

//     useEffect(() => {
//         const volTrouve = data.vols.find(v => v.id === parseInt(id));
//         setVol(volTrouve);
//     }, [id]);

//     const history = useNavigate();

//     // const filtre = vols.filter((monVol) => monVol.id === id)

//     const annuler = () => {
//         history('/');
//     };

//     if (!vol) {
//         return <p>Chargement en cours...</p>;
//     }
//     // console.log(vols);
    

//     // const vol = vols.find(v => v.id === parseInt(id));

//     // if (!filtre) {
//     //     return <p>Aucun vol trouvé pour l’ID : {id}</p>;
//     // }

//     // const envoyerReservation = async () => {
//     //     const reservationData = {
//     //       nom: "Benamara",
//     //       prenom: "Sofiane",
//     //       email: "sofiane.b@example.com",
//     //       telephone: "7777777777",
//     //       vol: {
//     //         numeroVols: "AF456",
//     //         compagnie: "Air France",
//     //         depart: {
//     //           villeDepart: "Alger",
//     //           dateDepart: "2025-06-15T09:00:00.000Z",
//     //           aeroportDepart: "Aéroport Houari Boumediene"
//     //         },
//     //         arrivee: {
//     //           villeArrivee: "Paris",
//     //           dateArrivee: "2025-06-15T12:00:00.000Z",
//     //           aeroportArrivee: "Aéroport Charles de Gaulle"
//     //         },
//     //         classe: "Economy",
//     //         prix: 280.00,
//     //         statut: "En attente"
//     //       }
//     //     };
//     //     try {
//     //         const response = await fetch('http://localhost:3000/api/reservations', {
//     //           method: 'POST',
//     //           headers: {
//     //             'Content-Type': 'application/json',
//     //           },
//     //           body: JSON.stringify(reservationData),
//     //         });
        
//     //         if (!response.ok) {
//     //           throw new Error(`Erreur http:${response.status}`);
//     //         }
        
//     //         const result = await response.json();
//     //         console.log("Réservation réussie :", result);
//     //         // ici tu peux afficher un message à l'utilisateur ou rediriger
//     //       } catch (error) {
//     //         console.error("Erreur lors de l'envoi de la réservation :", error.message);
//     //         // afficher une alerte ou un message d'erreur dans l'UI
//     //       }
//     //     };
      


//     const reserver = () => {
//         fetch('http://192.168.68.194:3700/api/reservations', {
//             method: 'POST',
//             headers: {"Content-Type": "application/json"},
//             body: JSON.stringify(vol)
//         }).then(() => {
//             console.log("Nouveau blog Ajouter")
//             // setChargement(false)
//             history('/Reservation')
//         }).catch(err => console.log(err))
//     }

//     // console.log(vol)
    

//     console.log(vol)

//     return ( 
//         <div className='details'>
//             <div className="partDetails">
//                 <h5>{vol.paysDepart} - {vol.paysArrivee}</h5>
//                 <h6>10 - 06 -2025</h6>
//                 <p>{vol.duree}</p>
//             </div>
            
//             <div className="informations">
//                 <div className="infos">
//                     <h5>{vol.paysDepart}</h5>
//                     <h6>{vol.heureDepart}</h6>
//                     <p>{vol.aeroportDepart}</p>
//                 </div>
//                 <span className='barre'></span>
//                 <div className="infos-d">
//                     <h5>{vol.paysArrivee}</h5>
//                     <h6>{vol.heureArrivee}</h6>
//                     <p>{vol.aeroportArrivee}</p>
//                 </div>
//             </div>

//             <div className="supplementaire">
//                 <h6><span className='titre'>Company</span> : <span className='special valeur'>Air France</span></h6>
//                 <h6><span className='titre'>Numero de Vol</span> : <span className='valeur'>{vol.numeroVol}</span></h6>
//                 <h6><span className='titre'>Prix</span> : <span className='valeur'>{vol.prix}</span>fr</h6>
//             </div>

//             <div className='connfirmer'>
//                 <button onClick={annuler}>Annuler</button>
//                 <button onClick={reserver}>Confirmer</button>
//             </div>
//         </div>
//      );
// };
 
// export default DetailsVols;


// import { useReservation } from '../../context/ReservationContext'; // adapte le chemin



import './details.css';
import { useNavigate, useParams } from 'react-router-dom';
// import data from '../../../data/api.json';
import { useContext, useEffect, useState } from 'react';
import { useReservation } from '../ReservationContext';
import FormContext from '../Formulaire/FormContext';




const DetailsVols = () => {
  const { id } = useParams();
  const [vol, setVol] = useState(null);
  const navigate = useNavigate();

  const { setReservation } = useReservation();
  const { formData } = useContext(FormContext)

  useEffect(() => {
    fetch('http://localhost:9000/vols')
    .then(res => res.json())
    .then(donner => {
      console.log(donner)
      const volTrouve = donner.find((v) => v.id === parseInt(id));
      // const volTrouve = donner.vols.find((v) => v.id === parseInt(id));
      console.log(volTrouve)
      setVol(volTrouve);
    })
    // const volTrouve = data.vols
  }, [id]);

  const annuler = () => {
    navigate('/');
  };

  const envoyerReservation = () => {
    if(formData.prenom !== ""){
      alert('Vous devez creer un compte')
    }else{
      const reservationData = {
        nom: formData.nom,
        prenom: formData.prenom,
        email: formData.email,
        telephone: "+221786452310",
        vol: {
          numeroVols: vol.numeroVol,
          compagnie: vol.compagnie,
          depart: {
            villeDepart: vol.paysDepart,
            dateDepart: vol.heureDepart,
            aeroportDepart: vol.aeroportDepart
          },
          arrivee: {
            villeArrivee: vol.paysArrivee,
            dateArrivee: vol.heureArrivee,
            aeroportArrivee: vol.aeroportArrivee
          },
          classe: "Economy",
          prix: vol.prix,
          statut: "En attente",
          duree: vol.duree
        }
      };

      fetch('http://localhost:3700/api/reservations', {
                    method: 'POST',
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(reservationData)
                }).then(() => {
                    console.log("Nouveau blog Ajouter")
                    // setChargement(false)
                    history('/Reservation')
                }).catch(err => console.log(err))

      setReservation(reservationData); // On stocke dans le contexte
      navigate('/Reservation')
    }
  
  
  }

  if (!vol) {
    return <p>Chargement en cours...</p>;
  }

  return (
    <div className='details'>
      <div className="partDetails">
        <h5>{vol.paysDepart} - {vol.paysArrivee}</h5>
        <h6>Date du jour: </h6>
        <p>Durée: {vol.duree}</p>
      </div>

      <div className="informations">
        <div className="infos">
          <h5>{vol.paysDepart}</h5>
          <h6>{vol.heureDepart}</h6>
          <p>{vol.aeroportDepart}</p>
        </div>
        <span className='barre'></span>
        <div className="infos-d">
          <h5>{vol.paysArrivee}</h5>
          <h6>{vol.heureArrivee}</h6>
          <p>{vol.aeroportArrivee}</p>
        </div>
      </div>

      <div className="supplementaire">
        <h6><span className='titre'>Company</span> <span className='special valeur'>{vol.compagnie}</span></h6>
        <h6><span className='titre'>Numero de Vol</span> <span className='valeur'>{vol.numeroVol}</span></h6>
        <h6><span className='titre'>Prix</span> <span className='valeur'>{vol.prix}</span></h6>
      </div>

      <div className='connfirmer'>
        <button onClick={annuler}>Annuler</button>
        <button onClick={envoyerReservation}>Reserver</button>
      </div>
    </div>
  );
};

export default DetailsVols;
