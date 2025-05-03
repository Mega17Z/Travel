import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import MonAccueil from "./FirstPage";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LesVols from "./ListesVol";
import Reservation from "./Reservation";
// import InputSearch from './components/InputSearch'
// import MainTravel from './components/MainTravel'

// import MainTravel from './components/MainTravel'

import Details from "./AfficheDetaiils";
import Formulaire from "./components/Formulaire/Formulaire";
// import ConnexionPage from "./connexion";
import Login from "./components/Formulaire/Login";
// import Vols from "./Components/travelCard/vols";

function App() {
  return (
    <>
    <ToastContainer position="top-right" autoClose={3000}/>
      <BrowserRouter>
       
          <Navbar />
          <Routes>
            <Route path="/" element={<MonAccueil />} />
            <Route path="/ListesVol" element={<LesVols />} />
            <Route path="/Reservation" element={<Reservation />} />
            <Route path="/AfficheDetaiils/:id" element={<Details />} />
            <Route path="/inscription" element={<Formulaire />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
          {/* <InputSearch/> */}
          {/* <MainTravel/> */}
      </BrowserRouter>
    </>
  );
}

export default App;
