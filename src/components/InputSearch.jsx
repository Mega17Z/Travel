import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const InputSearch = () => {
     
  const [vols, setVols] = useState([])
  const [recherche, setRecherche] = useState("")
  const navigate =useNavigate()

  useEffect(() =>{
   fetch('http://localhost:9000/vols.json')
   .then((res) => res.json()) 
   .then((donnes) => setVols(donnes) )
   .catch((err) => console.error('Erreur API',err))
  }, []);

  const handleRecherche = () => {
    const resultats = vols.filter(
      (vol) => vol.pays.toLowerCase() === recherche.toLocaleLowerCase()
    )

    if(resultats.length > 0){
      navigate('/listesVol', {state : {pays: recherche, vols: resultats} })
    }else{
      alert('Aucun vol trouvé pour ce pays')
    }
  }

  return (
    <div>
      <div className="container" >
        <form className="d-flex" role="search">
          <input
            className="form-control mt-4 bg-white rounded-5"
            type="text"
            value={recherche}
            onChange={(e) => setRecherche(e.target.value)}
            placeholder="Recherche de Vols..."
          />
          <i className="bi bi-search" onClick={handleRecherche}></i>
        </form>
      </div>
    </div>
  );
};

export default InputSearch;
