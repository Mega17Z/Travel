import Decouvertes from "./Components/Decouvertes/decouvertes";
import Footer from "./Components/Footer/footer";
import RechercheVols from "./Components/rechercheVol/rechercheVol";
import MainTravel from "./Components/MainTravel";
import useAffichageVols from "./Components/useVols";
import Vols from "./components/travelCard/vols";

const MonAccueil = () => {
  const { vols } = useAffichageVols(3);

  return (
    <div>
      <MainTravel />
      <RechercheVols />
      <Decouvertes />
      <Vols tableau={vols} afficheButton={true} titre={"Nos Vols"} />
      <Footer />
    </div>
  );
};

export default MonAccueil;
