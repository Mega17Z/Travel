import React from "react";
import ReserveBtn from "./button";

const reserve = ({ places }) => {
  return (
    <div className="col-md-2 d-flex flex-column align-items-center justify-content-center mx-auto">
      <p className="text-center fw-bolder text">Places Restantes</p>
      <p className="fw-bolder fs-3 text-dark">{places}</p>
      <ReserveBtn texte="Reserver" />
    </div>
  );
};

export default reserve;
