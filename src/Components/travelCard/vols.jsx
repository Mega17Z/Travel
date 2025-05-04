import React from "react";
import "./Card.css";
import CarteVoyage from "./carteVoyage";
import DiscoverMore from "./button";

const Vols = ({tableau, afficheButton, titre}) => {

  return (
    <div className="container px-1 d-flex flex-column gap-2">
      <h5 className="ps-2 text-primary text">{titre}</h5>
      <CarteVoyage donner={tableau} />
      {afficheButton && <DiscoverMore texte="Decouvrir plus" /> }
    </div>
  );
};

export default Vols;
