import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormContext from "./FormContext";
import { Link } from "react-router-dom";

const Formulaire = () => {
  const { formData, updateFormData } = useContext(FormContext);
  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData(name, value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Données du formulaire :", formData);
    // Tu peux ajouter ici la logique pour envoyer les données à un serveur
  };
  return (
    <Form
      onSubmit={handleSubmit}
      style={{
        maxWidth: "500px",
      }}
      className="container shadow my-3 py-4 flex-column rounded"
    >
      <h2 className="text-center">Formulaire d'inscription</h2>
      <div className="row">
        <Form.Group className="col-12 col-md-6 mb-3" controlId="formBasicEmail">
          <Form.Label>Prenom</Form.Label>
          <Form.Control
            style={{
              maxWidth: "100%",
            }}
            className="m-0"
            name="prenom"
            value={formData.prenom}
            onChange={handleChange}
            type="text"
            placeholder="Renseignez votre prénom"
          />
        </Form.Group>
        <Form.Group className="col-12 col-md-6 mb-3" controlId="formBasicEmail">
          <Form.Label>Nom</Form.Label>
          <Form.Control
            style={{
              maxWidth: "100%",
            }}
            className="m-0"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            type="text"
            placeholder="Renseignez votre nom"
          />
        </Form.Group>
      </div>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          style={{
            maxWidth: "100%",
          }}
          className="m-0"
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          placeholder="Renseignez votre email"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Mot de passe</Form.Label>
        <Form.Control
          style={{
            maxWidth: "100%",
          }}
          className="m-0"
          name="motdePasse"
          value={formData.motDePasse}
          onChange={handleChange}
          type="password"
          placeholder="Mot de passe"
        />
      </Form.Group>

      <Button className="mx-auto px-5" variant="primary" type="submit">
        Submit
      </Button>

      <p className="mt-2" style={{fontSize: "15px", color: "#040265", textAlign: "center"}}>Connectez-vous si vous avez un compte: <Link to={"/connexion"} style={{textDecoration: "underline"}}>Se connecter</Link></p>
    </Form>
  );
};

export default Formulaire;
