import React from "react";

const InputSearch = () => {
  return (
    <div>
      <div className="linput" >
        <form className="d-flex" role="search">
          <input
            className="form-control mt-4 bg-white rounded-5"
            type="search"
            placeholder="Recherche de Vols..."
            aria-label="Search"
          />
          <i className="bi bi-search"></i>
        </form>
      </div>
    </div>
  );
};

export default InputSearch;
