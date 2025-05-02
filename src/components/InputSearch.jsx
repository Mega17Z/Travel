import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const InputSearch = () => {
  const [vols, setVols] = useState([]);
  const [recherche, setRecherche] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:9000/vols")
      .then((res) => res.json())
      .then((donnes) => {
        console.log("Données récupérées :", donnes)
        setVols(donnes)})
      .catch((err) => console.error("Erreur API", err));
  }, []);

  const handleRecherche = () => {
    const paysTape = recherche.toLowerCase().trim();
    const resultats = vols.filter(
      (vol) => vol.paysDepart?.toLowerCase().trim() === paysTape
    );

    console.log(resultats)
    
    if (resultats.length > 0) {
      navigate("/listesVol", { state: { pays: recherche, vols: resultats } });
    } else {
      alert("Aucun vol trouvé pour ce pays");
    }
    setRecherche("")
  };

  return (
    <div>
      <div className="container">
        <form className="d-flex" role="search" onSubmit={(e) => e.preventDefault()}>
          <input
            className="form-control mt-4 bg-white rounded-5"
            type="text"
            value={recherche}
            onChange={(e) => setRecherche(e.target.value)}
            placeholder="Recherche de Vols..."
          />
          <i className="bi bi-search" ></i>
        </form>
          <button className="btn btn-info" onClick={handleRecherche}>Recherche</button>
      </div>
    </div>
  );
};

export default InputSearch;
