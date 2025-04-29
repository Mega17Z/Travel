import React from "react";
import ReserveBtn from "./button";

const reserve = ({ places }) => {
  return (
    <div className="px-5 flex flex-col gap-2 justify-center mx-auto min-w-[158px] w-[158px]">
      <p className="m-0 text-center">Places Restantes</p>
      <p className="text-3xl font-bold m-0 text-center">{places}</p>
      <ReserveBtn texte="Reserver" />
    </div>
  );
};

export default reserve;
