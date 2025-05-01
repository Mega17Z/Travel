import React, { useEffect, useState } from "react";
import { data } from "react-router-dom";

const InputSearch = () => {
     
  const [vols, setVols] = useState([])
  const [recherche, setRecherche] = useState("")
  const [resultFiltre, setResultFiltre] = useState([])

  useEffect(() =>{
   fetch('http://localhost:9000/vols')
   .then((res) => {
    if(!res.ok){
       throw new Error('Erreur réseau')
    }
    return res.json()
   }) 
   .then((data) =>{
    setVols(data)
   })
   .catch((error) =>{
    console.error('Erreur lors du fetch des vols :' , error)
   })
  }, [])

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
