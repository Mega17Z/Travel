import Decouvertes from "./components/Decouvertes/decouvertes";
// import Foot from "./components/Footer/foot";
// import DetailsVols from "./components/DetailsVols/details";
// import Foot from "./components/Footer/foot";
import Footer from "./components/Footer/footer";
import RechercheVols from "./components/rechercheVol/rechercheVol";
// import Navbar from "./components/Navbar";
// import InputSearch from "./components/InputSearch"
import MainTravel from "./components/MainTravel";
// import CardSimule from "./components/simulation/simule";
// import { useEffect, useState } from "react";
import useAffichageVols from "./components/useVols";
import Vols from "./components/travelCard/vols";
// import Vols from "./Components/travelCard/Vols";
// import DetailsVols from "./components/DetailsVols/details";
// import Vols from "./Components/travelCard/vols";
// import Formulaire from "./Components/Formulaire/Formulaire";

const MonAccueil = () => {
    const { vols } = useAffichageVols(3)

  return (
    <div>
      {/* <Navbar /> */}
      {/* <InputSearch /> */}
      <MainTravel />
      <RechercheVols />
      <Decouvertes />
            {/* <CardSimule tableau={vols} /> */}
            {/* <Vols /> */}
      {/* <Vols tableau={vols} /> */}
      {/* <DetailsVols /> */}
      <Vols tableau={vols} />
      {/* <Vols /> */}
      {/* <Vols /> */}
      {/* <Formulaire /> */}
      <Footer />
      {/* <Foot /> */}
    </div>
  );
};

export default MonAccueil;
