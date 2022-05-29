import * as React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Container from 'react-bootstrap/Container'
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Fade } from 'react-awesome-reveal';
import logo from '../assets/static/logo/ghc_logo192.png';
import bars from '../assets/static/icons/bars.svg';

import '../assets/styles/Header.scss';


const Header = () => {
  const displayResponsive = (e) => {
    e.preventDefault();
    let responsiveBlock = document.getElementById("nav-bar__responsive");
    if (responsiveBlock.className === "nav-bar__responsive--none") {
        responsiveBlock.className = "nav-bar__responsive--block";
    } else if (responsiveBlock.className === "nav-bar__responsive--block") {
        responsiveBlock.className = "nav-bar__responsive--none";
    }
  }

  const disableMenu = (e) => {
      e.preventDefault();
      let responsiveBlock = document.getElementById("nav-bar__responsive");
      if (responsiveBlock.className === "nav-bar__responsive--block") {
          responsiveBlock.className = "nav-bar__responsive--none";
      }
  }

  const enableMenu = (e) => {
      e.stopPropagation();
      let menu = document.getElementById("nav-bar__responsive-list-id");
      menu.style.display = "block";
  }


  return (
    <React.Fragment>
      <nav className="navbarroot">
        <Container fluid="xxl" className="nav-bar"> 
            <Link className="nav-bar__logo" to="/">
                <img className="nav-bar__logo-image" src={ logo }/>
            </Link>
            
            <div className="nav-bar__display" id="nav-bar__display-id" onClick={ displayResponsive }>
                <img className="nav-bar__display-icon" src={ bars } />
            </div>
            
            <div className="nav-bar__buttons">
                {/* <HashLink className="nav-bar__buttons-item nav-bar__buttons-item--home" to="/intro#start">Introducción</HashLink>
                <HashLink className="nav-bar__buttons-item nav-bar__buttons-item--explore" smooth  to="/intro#customers">Consumidores</HashLink>
                <HashLink className="nav-bar__buttons-item nav-bar__buttons-item--explore" smooth  to="/intro#how-does-it-work">¿Cómo Funciona?</HashLink>
                <HashLink className="nav-bar__buttons-item nav-bar__buttons-item--business" smooth to="/intro#business">Negocios</HashLink> */}
                <button className="nav-bar__button-item nav-bar__buttons-item--subscribe" onClick={ () => window.location.href="/#subscribe"}>Suscribir</button>
                                                                                                                         
            </div>
        </Container>         
    </nav>
    <section id="nav-bar__responsive" className="nav-bar__responsive--none"  onClick={ disableMenu }>
        <ul id="nav-bar__responsive-list-id" className="nav-bar__responsive-list" onClick={ enableMenu }>
            {/* <li className="nav-bar__responsive-li" ><HashLink className="nav-bar__responsive-item" to="/intro#start">Introducción</HashLink></li>
            <li className="nav-bar__responsive-li" ><HashLink className="nav-bar__responsive-item" to="/intro#customers">Consumidores</HashLink></li>
            <li className="nav-bar__responsive-li" ><HashLink className="nav-bar__responsive-item" to="/intro#how-does-it-work">¿Cómo Funciona?</HashLink></li>
            <li className="nav-bar__responsive-li" ><HashLink className="nav-bar__responsive-item" to="/intro#business">Negocios</HashLink></li> */}
        </ul>                                                       
    </section>

    </React.Fragment>
  );
}

export default Header;