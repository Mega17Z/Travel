import './details.css'

const DetailsVols = () => {
    return ( 
        <div className='details'>
            <div className="partDetails">
                <h3>Dakar - Paris</h3>
                <h4>10 - 06 -2025</h4>
                <p>Durée du voyage 6h30m</p>
            </div>
            
            <div className="informations">
                <div className="infos">
                    <h3>Départ</h3>
                    <h4>22h30</h4>
                    <p>Aeroport Blaise Diagne</p>
                </div>
                <span className='barre'></span>
                <div className="infos-d">
                    <h3>Arriver</h3>
                    <h4>00h30</h4>
                    <p>Paris la France</p>
                </div>
            </div>

            <div className="supplementaire">
                <h4><span className='titre'>Company</span> : <span className='special valeur'>Air France</span></h4>
                <h4><span className='titre'>Numero de Vols</span> : <span className='valeur'>89086810</span></h4>
                <h4><span className='titre'>Prix</span> : <span>1x </span> <span className='valeur'>200000</span></h4>
                <h4><span className='titre'>Total</span> : <span className='valeur'>200000</span><span>fr</span></h4>
            </div>

            <div className='connfirmer'>
                <button>Annuler</button>
                <button>Confimer</button>
            </div>
        </div>
     );
}
 
export default DetailsVols;