import React from "react";
import Reserve from "./reserve";

const volsInfos = ({
  departLieu,
  departPays,
  departHeure,
  arriveLieu,
  arrivePays,
  arriveHeure,
}) => {
  return (
    <div className="row flex-column flex-md-row">
      <div className="col-12 col-md-10 row align-items-center justify-content-around gap-2 border-end border-5 m-0 p-0 p-md-0">
        <div className="col-12">
          <p
            style={{
              width: "fit-content",
              position: "relative",
              // right: "60px",
            }}
            className="mb-3 mb-md-0 text-primary border-bottom border-3 border-primary fw-bolder fs-5 m-auto text1"
          >
            Air Senegal
          </p>
        </div>
        <div className="col-4 col-md-2 text-center text-primary p-0">
          <p className="primary bg-primary text-light rounded">Depart</p>
          <p className="text">
            {departLieu},{departPays}
          </p>
          <p className="text">{departHeure}</p>
        </div>
        <div className="col-1 border hr"></div>
        <div className="col-4 col-md-2 text-center text-primary">
          <p className="primary bg-primary text-light rounded">Arrivée</p>
          <p className="text">
            {arriveLieu},{arrivePays}
          </p>
          <p className="text">{arriveHeure}</p>
        </div>
      </div>
      <Reserve places="18" />
    </div>
  );
};

export default volsInfos;
