import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const InputSearch = () => {
     
  const [vols, setVols] = useState([])
  const [recherche, setRecherche] = useState("")
  const navigate =useNavigate()

  useEffect(() =>{
   fetch('http://localhost:9000/vols')
   .then((res) => res.json()) 
   .then((donnes) => setVols(donnes) )
   .catch((err) => console.error(err))
  }, []);

  

  return (
    <div>
      <div className="container" >
        <form className="d-flex" role="search">
          <input
            className="form-control mt-4 bg-white rounded-5"
            type="search"
            placeholder="Recherche de Vols..."
          />
          <i className="bi bi-search"></i>
        </form>
      </div>
    </div>
  );
};

export default InputSearch;
