import './decouvertes.css'
import avion from '../../assets/avion.jpg'
import france from '../../assets/france.jpg'
import rio from '../../assets/rio.jpg'
import interieur from '../../assets/interieur.jpg'


const Decouvertes = () => {
    return ( 
        <div className="sectionDecouve">
            <h5>Decouvertes</h5>
            <div className="lesImages">
                <div className="card">
                    <img src={avion} alt="" />
                </div>
                <div className="card">
                    <img src={france} alt="" />
                </div>
                <div className="card">
                    <img src={rio} alt="" />
                </div>
                <div className="card">
                    <img src={interieur} alt="" />
                </div>
            </div>
            <button>Decouvertes</button>
        </div>
     );
}
 
export default Decouvertes;