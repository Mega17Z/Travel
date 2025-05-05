import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'
import './footer.css';

const Footer = () => {
    return ( 
        <div className="footerSection">
            <div className="leFooter">
                <div className="bloc travleCompany">
                    <h4>Travel Company</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus deleniti modi nostrum quasi quaerat cumque voluptatum natus voluptatem et sit aut dicta, reiciendis ratione autem! Iure officia consequuntur veniam nostrum.</p>
                </div>
                <div className="bloc">
                    <h5>Partenaires</h5>
                    <ul>
                        <li>Air France</li>
                        <li>Air Senegal</li>
                        <li>Api Vols</li>
                        <li>Yassir Sn</li>
                    </ul>
                </div>
                <div className="bloc">
                    <h5>Services</h5>
                    <ul>
                        <li>Assurance Voyage</li>
                        <li>Assitance Visa</li>
                        <li>Conseillere Voyage</li>
                        <li>Reservation vol</li>
                    </ul>
                </div>
                <div className="bloc">
                    <h5>Contact</h5>
                    <ul>
                        <li>travelCompany@fly.sn</li>
                        <li>33 800 00 80</li>
                    </ul>
                    <div className="reseaux">
                        <FaFacebook />
                        <FaTwitter />
                        <FaLinkedin />
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;