import React from "react";
import VolInfo from "./volsInfos";

const carteVoyage = () => {
  return (
    <div className="shadow py-2 px-2 rounded">
      <VolInfo
        departLieu="Dakar"
        arriveLieu="Paris"
        departPays="Senegal"
        arrivePays="France"
        departHeure="20:00"
        arriveHeure="03:00"
      />
    </div>
  );
};

export default carteVoyage;
