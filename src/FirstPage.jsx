import Decouvertes from "./components/Decouvertes/decouvertes";
// import Foot from "./components/Footer/foot";
// import DetailsVols from "./components/DetailsVols/details";
// import Foot from "./components/Footer/foot";
import Footer from "./components/Footer/footer";
import RechercheVols from "./components/rechercheVol/rechercheVol";
// import Navbar from "./components/Navbar";
// import InputSearch from "./components/InputSearch"
import MainTravel from "./components/MainTravel";

const MonAccueil = () => {
    return ( 
        <div>
            {/* <Navbar /> */}
            {/* <InputSearch /> */}
            <MainTravel />
            <RechercheVols />
            <Decouvertes />
            {/* <Vols /> */}
            <Footer />
            {/* <Foot /> */}
        </div>
     );
}
 
export default MonAccueil;