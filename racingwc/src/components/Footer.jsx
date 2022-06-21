import * as React from "react";
import "../assets/styles/Footer.scss";
import moto from "../assets/static/logo/moto.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import buttonURL from "../utils";

const Footer = () => {
  const contactURL = buttonURL;
  return (
    <React.Fragment>
      <div className="home-footer">
        <ul className="home-footer__ul">
            <li className="home-footer__li"><Link  to="/about/" className="home-footer__link">Sobre Nosotros</Link></li>
            <li className="home-footer__li"><Link  to="/contact/" className="home-footer__link" onClick={() => window.location.href = contactURL}>Contacto</Link></li>
            <li className="home-footer__li"><Link  to="/products/" className="home-footer__link">Productos</Link></li>
        </ul>
        <div>
          <p className="home-footer__p">Siguenos en redes sociales</p>
          <div className="social-media">
            <a className="social-media-link" href="https://www.facebook.com/Rosalesracingmotor" target="_blank" rel="noopener noreferrer">
              <span><FontAwesomeIcon icon={["fab", "facebook"]}/></span>
            </a>
            <a className="social-media-link" href="https://www.facebook.com/Rosalesracingmotor" target="_blank" rel="noopener noreferrer">
            <span><FontAwesomeIcon icon={["fab", "instagram"]}/></span>
            </a>
            <a className="social-media-link" href="https://www.facebook.com/Rosalesracingmotor" target="_blank" rel="noopener noreferrer">
            <span><FontAwesomeIcon icon={["fab", "tiktok"]}/></span>
            </a>
            <a className="social-media-link" href="https://www.facebook.com/Rosalesracingmotor" target="_blank" rel="noopener noreferrer">
            <span><FontAwesomeIcon icon={["fab", "linkedin"]}/></span>
            </a>
          </div>
          <p className="home-footer__p">Encuentranos en:</p>
          <p className="home-footer__p"><FontAwesomeIcon icon="fa-solid fa-location-dot" /> jr .tarapaca 918 Huánuco, Peru</p>
        </div>
    </div>
    <img className="redwoman" src={moto} />
    <p className="home-footer__copyright">
      2022 © Rosales Racing Motors - Reservados todos los derechos
    </p>
    </React.Fragment>
  );
}

export default Footer;