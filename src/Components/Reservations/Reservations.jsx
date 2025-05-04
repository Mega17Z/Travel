import "./Reservation.css"
import { UseReservation } from "./UseContext/UseContext";
export const Reservations = () => {

// const {reservation, handleChange} = UseReservation()


  return <>
  <div className="content">
    <h1>Faites vos reservations de billets d'avions </h1>
    <form action="" className="form">
        <h2>Informations Personelles</h2>
    <div className="infos-personels">
        <div className="mb-2 inputs">
        <label htmlFor="nom">Nom</label>
        <input type="text" name="nom" placeholder="Nom" className="" id="nom"/>
        </div>
        <div className="mb-2 inputs">
        <label htmlFor="prenom">Prenom</label>
        <input type="text" name="prenom" placeholder="Prenom" className="" id="prenom" />
        </div>

    </div>
    <div className="infos-personels">
        <div className="mb-2 inputs">
        <label htmlFor="email">E-mail</label>
        <input type="email" name="email" placeholder="email" className="" id="email" />
        </div>
        <div className="mb-2 inputs">
        <label htmlFor="telephone">Telephone</label>
        <input type="number" name="telephone" placeholder="telephone" className="" id="telephone" />
        </div>
    </div>

    <h2 style={{marginTop:"2rem"}}>Informations sur le vol</h2>

    {/* informations sur le vol */}
    <div className="infos-vol">
        <div className="mb-2 inputs">
        <label htmlFor="villeDepart">Ville Depart</label>
        <input type="text" name="villeDepart" placeholder="villeDepart" className="" id="villeDepart" />
        </div>
        <div className="mb-2 inputs">
        <label htmlFor="villeArrivee">Ville Arrivee</label>
        <input type="text" name="villeArrivee" placeholder="villeArrivee" className="" id="villeArrivee" />
        </div>
        </div>

        <div className="infos-vol">
        <div className="mb-2 inputs">
        <label htmlFor="dateDepart">Date Depart</label>
        <input type="date" name="dateDepart" placeholder="dateDepart" className="" id="dateDepart" />
        </div>
        <div className="mb-2 inputs">
        <label htmlFor="dateArrivee">Date Arrivee</label>
        <input type="date" name="dateArrivee" placeholder="dateArrivee" className="" id="dateArrivee" />
        </div>
        </div>

        <div className="infos-vol">
        <div className="mb-2 inputs">
        <label htmlFor="heureDepart">Heure Depart</label>
        <input type="time" name="heureDepart" placeholder="heureDepart" className="" id="heureDepart" />
        </div>
        <div className="mb-2 inputs">
        <label htmlFor="heureArrivee">Heure Arrivee</label>
        <input type="time" name="heureArrivee" placeholder="heureArrivee" className="" id="heureArrivee" />
        </div>
        </div>

        <div className="infos-vol">
        <div className="mb-2 inputs">
        <label htmlFor="compagnie">Compagnie</label>
        <input type="text" name="compagnie" placeholder="compagnie" className="" id="compagnie" />
        </div>
        <div className="mb-2 inputs">
        <label htmlFor="numeroVol">N° Vol</label>
        <input type="text" name="numeroVol" placeholder="numeroVol" className="" id="numeroVol" />
        </div>
        </div>

        <div className="infos-vol">
        <div className="mb-2 inputs">
        <label htmlFor="prix">Prix</label>
        <input type="number" name="prix" placeholder="prix" className="" id="prix" />
        </div>
        <div className="mb-2 inputs">
        <label htmlFor="duree">Duree</label>
        <input type="text" name="duree" placeholder="duree" className="" id="duree" />
        </div>
        <div className="mb-2 inputs">
        <label htmlFor="places">Places</label>
        <input type="number" name="places" placeholder="places" className="" id="places" />
        </div>

        </div>
    
    <button type="submit" className="btn" style={{marginTop:"2rem"}}>Valider</button>
    </form>
  </div>
  </>
};
