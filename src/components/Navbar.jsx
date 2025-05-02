import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import './navbar.css';

const Navbar = () => {
  // const [utilisateur, setUtilisateur] = useState(null);
  
  // const data = JSON.parse(localStorage.getItem("utilisateur") || "null");
  // useEffect(() => {
  //   fetch('http://localhost:6000/utilisateurs')
  //   .then(res => res.json())
  //   .then(donne => {
  //     setUtilisateur(donne);
  //   })
  // }, []);

  // const verification = (e) => {
  //   e.preventDefault()

  //   const filtre = utilisateur.filtre(e => e.id === data.id)

    
  // }

  return (
    <div>
      {/* ==========================Navbar========================== */}
      <nav className="navbar navbar-expand-lg bg-white p-1">
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
                <NavLink
                  to="/"
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? "#040265" : "#f1f1f1",
                    color: isActive ? "white" : "#040265"
                  })}
                >
                  Accueil
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/ListesVol"
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? "#040265" : "#f1f1f1",
                    color: isActive ? "white" : "#040265"
                  })}
                >
                  Listes des Vols
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/Reservation"
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? "#040265" : "#f1f1f1",
                    color: isActive ? "white" : "#040265"
                  })}
                >
                  Reservations
                </NavLink>
              </li>
            </ul>
            <form className="d-flex" role="search">
              {/* {utilisateur ? (
                <span className="text-primary fw-bold">Connecté</span>
              ) : ( */}
                <Link to="/inscription">
                <button
                  className="btn rounded-5 text-white"
                  style={{ backgroundColor: "#040265" }}
                  
                >
                  Connexion
                </button>
                </Link>
              {/* )} */}
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
