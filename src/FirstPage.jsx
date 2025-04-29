import Decouvertes from "./components/Decouvertes/decouvertes";
import Foot from "./components/Footer/foot";
import Footer from "./components/Footer/footer";
import RechercheVols from "./components/rechercheVol/rechercheVol";

const MonAccueil = () => {
    return ( 
        <div>
            <RechercheVols />
            <Decouvertes />
            <Footer />
            <Foot />
        </div>
     );
}
 
export default MonAccueil;