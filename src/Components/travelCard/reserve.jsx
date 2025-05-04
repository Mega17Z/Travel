import React from "react";
import ReserveBtn from "./button";

const reserve = ({ places }) => {
  return (
    <div className="col-md-2 d-flex flex-column align-items-center justify-content-center mx-auto">
      <p className="text-center text">Places Restantes</p>
      <p className="fw-bolder fs-5 text-dark">{places}</p>
      <ReserveBtn texte="Plus de Details" />
    </div>
  );
};

export default reserve;
