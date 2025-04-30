import React from "react";
import "./Card.css";
import CarteVoyage from "./carteVoyage";
import DiscoverMore from "./button";

const vols = () => {
  return (
    <div className="container px-1 d-flex flex-column gap-2">
      <h2 className="ps-2 text-primary text">Nos Vols</h2>
      <CarteVoyage />
      <DiscoverMore texte="Decouvrir plus" />
    </div>
  );
};

export default vols;
