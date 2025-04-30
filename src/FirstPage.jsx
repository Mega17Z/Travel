import Decouvertes from "./components/Decouvertes/decouvertes";
// import Foot from "./components/Footer/foot";
// import DetailsVols from "./components/DetailsVols/details";
// import Foot from "./components/Footer/foot";
import Footer from "./components/Footer/footer";
import RechercheVols from "./components/rechercheVol/rechercheVol";
// import Navbar from "./components/Navbar";
// import InputSearch from "./components/InputSearch"
import MainTravel from "./components/MainTravel";
import CardSimule from "./components/simulation/simule";
import { useEffect, useState } from "react";

const MonAccueil = () => {
    const [lesCard, setCards] = useState([])

    useEffect(() => {
        fetch('http://localhost:9000/vols')
        .then(res => res.json())
        .then(donner => {
            setCards(donner.slice(0, 3))
        })
    }, [])

    return ( 
        <div>
            {/* <Navbar /> */}
            {/* <InputSearch /> */}
            <MainTravel />
            <RechercheVols />
            <Decouvertes />
            <CardSimule tableau={lesCard} />
            {/* <Vols /> */}
            <Footer />
            {/* <Foot /> */}
        </div>
     );
}
 
export default MonAccueil;