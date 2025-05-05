import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const discoverMore = ({ texte }) => {
  return (
    <Link to={"/ListesVol"}>
    <button
      style={{
        width: "fit-content",
      }}
      className="btn p-2 rounded-3"
    >
      {texte}
    </button>
    </Link>
  );
};

export default discoverMore;
