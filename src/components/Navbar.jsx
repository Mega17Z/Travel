import React from "react";

const Navbar = () => {
  return (
    <div>
      {/* ==========================Navbar========================== */}
      <div>
      <nav className="navbar navbar-expand-lg bg-white p-1" >
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="/Logo (1).png" alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto gap-5  mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link text-white"  href="#"  style={{backgroundColor: '#040265'}}>
                Accueil
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{backgroundColor: '#f1f1f1', color: '#040265'}}>
                 Listes des Vols 
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " style={{backgroundColor: '#f1f1f1' ,color: '#040265'}}>Reservations</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <button className="btn rounded-5 text-white" style={{backgroundColor: '#040265'}}>Connexion</button>
            </form>
          </div>
        </div>
      </nav>
      </div>
    </div>
  );
};

export default Navbar;
