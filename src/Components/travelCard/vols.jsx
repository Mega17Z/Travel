import React from "react";
import "./Card.css";
import CarteVoyage from "./carteVoyage";
import DiscoverMore from "./button";

const Vols = ({tableau}) => {
  return (
    <div className="container px-1 d-flex flex-column gap-2">
      <h5 className="ps-2 text-primary text">Nos Vols</h5>
      <CarteVoyage donner={tableau} />
      <DiscoverMore texte="Decouvrir plus" />
    </div>
  );
};

export default Vols;
