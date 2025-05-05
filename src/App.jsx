import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import MonAccueil from "./FirstPage";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LesVols from "./ListesVol";
import Reservation from "./Reservation";
import Details from "./AfficheDetaiils";
import Formulaire from "./Components/Formulaire/Formulaire";
import Login from "./Components/Formulaire/Login";
import { Reservations } from "./Components/Reservations/Reservations";
import { BilletReservation } from "./Components/BilletReservation/BilletsReserve";

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
            <Route path="/Reservations" element={<Reservations />} />
            <Route path="/pdfbillets" element={<BilletReservation />} />
          </Routes>
          {/* <InputSearch/> */}
          {/* <MainTravel/> */}
      </BrowserRouter>
    </>
  );
}

export default App;
