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
    <div className="flex sm:flex-wrap flex-wrap justify-center">
      <div className="flex justify-between items-center sm:border-r w-[85%] border-r-0">
        <div className="flex flex-col justify-center text-start w-[12%] min-w-[105px]">
          <p className="text-blue-800 border-b-3 w-fit pb-1 font-bold mb-1">
            Air Senegal
          </p>
          <p>Depart</p>
          <p>
            {departLieu},{departPays}
          </p>
          <p>{departHeure}</p>
        </div>
        <div className="border-blue-800 border min-w-[20px] w-[65%] mt-10"></div>
        <div className="flex flex-col justify-center mt-8 text-end w-[12%] mr-5 min-w-[90px]">
          <p>Arrivée</p>
          <p>
            {arriveLieu},{arrivePays}
          </p>
          <p>{arriveHeure}</p>
        </div>
      </div>
      <Reserve places="18" />
    </div>
  );
};

export default volsInfos;
