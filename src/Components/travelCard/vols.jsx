import React from "react";
import CarteVoyage from "./carteVoyage";
import DiscoverMore from "./button";

const Vols = () => {
  return (
    <div className="p-0 m-0">
      <h2 className="border-l-7 border-blue-800 ps-2 w-fit text-2xl">
        Nos Vols
      </h2>
      <CarteVoyage />
      <DiscoverMore texte="Decouvrir plus" />
    </div>
  );
};

export default Vols;
