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
        <div>
          <h2>Vols vers {pays}</h2> 
          <ul>
            { vols.map((vol, index) => (
                  <li key={index}>
                   {vol.paysDepart}
                    {vol.numeroVol} 
                    {vol.heureDepart}
                  </li>

                ))}
          </ul>
          <button onClick={() => navigate('/')}>Nouvelle recherche</button>
        </div>
     );
}
 
export default LesVols;