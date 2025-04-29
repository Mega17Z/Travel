import React from "react";
import VolInfo from "./volsInfos";

const carteVoyage = () => {
  return (
    <div className="bg-white shadow-md my-5 p-3 rounded-md">
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
