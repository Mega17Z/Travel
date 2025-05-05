import Decouvertes from "./components/Decouvertes/decouvertes";
import Footer from "./components/Footer/footer";
import RechercheVols from "./components/rechercheVol/rechercheVol";
import MainTravel from "./components/MainTravel";
import useAffichageVols from "./components/useVols";
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
