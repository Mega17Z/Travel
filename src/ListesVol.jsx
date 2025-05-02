import { useLocation, useNavigate } from "react-router-dom";

const LesVols = () => {

    const location = useLocation()
    const navigate = useNavigate()

    const {vols, pays} = location.state || {}

    if(!vols || vols.length === 0){
        return (
            <div>
                <p>Aucun résultat. Retour à la recherche.</p>
                <button onClick={() => navigate('/')}>Retour</button>
            </div>
        )
    }

    return ( 
        <div className="shadow rounded-4 mt-5" style={{width: '50%'}}>
          <h2 className="text-center">{pays}</h2> 
          <div>
            { vols.map((vol, index) => (
                  <div className="d-flex justify-content-center m-4" style={{flexDirection: 'column'}} key={index}>

                     <p><strong style={{color: '#040265'}}>Départ : </strong>{vol.paysDepart}</p>
                      <p> <strong style={{color: '#040265'}}>Numéro du Vol : </strong>{vol.numeroVol}</p> 
                      <p><strong style={{color: '#040265'}}>Heure de départ : </strong>{vol.heureDepart}</p>
                  </div>

                ))}
          </div>
          <button onClick={() => navigate('/')} className="btn m-5 rounded-5">Nouvelle recherche</button>
        </div>
     );
}
 
export default LesVols;