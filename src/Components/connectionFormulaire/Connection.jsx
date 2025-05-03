import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const Connection = () => {
  // État local pour stocker les données de connexion
  const [loginData, setLoginData] = useState({
    email: "",
    motDePasse: "",
  });

  // Gérer les changements dans les champs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  // Gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Données de connexion :", loginData);
    // Tu peux ajouter une logique d'authentification ici
  };
  return (
    <div>
      <Form
        onSubmit={handleSubmit}
        style={{ maxWidth: "400px" }}
        className="container shadow my-5 py-4 rounded flex-column"
      >
        <h2 className="text-center mb-4">Connexion</h2>

        <Form.Group className="mb-3" controlId="formLoginEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            style={{
              maxWidth: "100%",
            }}
            className="m-0"
            type="email"
            placeholder="Entrer votre email"
            name="email"
            value={loginData.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="formLoginPassword">
          <Form.Label>Mot de passe</Form.Label>
          <Form.Control
            style={{
              maxWidth: "100%",
            }}
            className="m-0"
            type="password"
            placeholder="Entrer votre mot de passe"
            name="motDePasse"
            value={loginData.motDePasse}
            onChange={handleChange}
          />
        </Form.Group>

        <div className="text-center">
          <Button type="submit" variant="primary" className="px-4">
            Se connecter
          </Button>
        </div>

        <p className="mt-2" style={{fontSize: "15px", color: "#040265", textAlign: "center"}}>Inscrivez vous si vous n'avez pas de compte: <Link to={"/inscription"} style={{textDecoration: "underline"}}>S'inscrire</Link></p>
      </Form>
    </div>
  );
};

export default Connection;
