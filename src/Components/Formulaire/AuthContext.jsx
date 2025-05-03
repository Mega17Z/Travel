// AuthContext.js
import React, { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [utilisateur, setUtilisateur] = useState(null);

  const fetchProfil = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      const response = await fetch("http://localhost:3000/api/users/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) throw new Error("Échec récupération profil");

      const data = await response.json();
      setUtilisateur(data);
    } catch (error) {
      console.error("Erreur récupération profil :", error);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUtilisateur(null);
  };

  useEffect(() => {
    fetchProfil();
  }, []);

  return (
    <AuthContext.Provider value={{ utilisateur, setUtilisateur, fetchProfil, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
