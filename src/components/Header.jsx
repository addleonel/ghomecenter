import React, {seEffect, useEffect, useState} from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from '../assets/static/logo/ghc_logo192.png';
import bars from '../assets/static/icons/bars.svg';

import '../assets/styles/Header.scss';


const Header = () => {

  const changeBackground = () => {
    if (window.scrollY >= 66){
      let nb = document.getElementById('navbarroot-id');
      nb.style.background = '#fff';
      nb.style.boxShadow = '0px 3px 3px rgba(27, 51, 78, 0.09)';
    }else {
      let nb = document.getElementById('navbarroot-id');
      nb.style.background = 'transparent';
      nb.style.boxShadow = 'none';
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeBackground); 
  })

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
      <nav id="navbarroot-id" className="navbarroot">
        <Container fluid="xxl" className="nav-bar"> 
            <Link className="nav-bar__logo" to="/">
                <img className="nav-bar__logo-image" src={ logo }/> <span className="nav-bar__logo-text">Granitos Home Center</span>
            </Link>
            
            <div className="nav-bar__display" id="nav-bar__display-id" onClick={ displayResponsive }>
                <img className="nav-bar__display-icon" src={ bars } /> 
            </div>
            
            <div className="nav-bar__buttons">
                <Link className="nav-bar__buttons-item nav-bar__buttons-item--home" to="/intro">Introducción</Link>
                <Link className="nav-bar__buttons-item nav-bar__buttons-item--explore"  to="/intro">Consumidores</Link>
                <Link className="nav-bar__buttons-item nav-bar__buttons-item--explore"   to="/intro">¿Quienes Somos?</Link>
                <Link className="nav-bar__buttons-item nav-bar__buttons-item--business"  to="/intro">Negocios</Link>
                <button className="nav-bar__button-item nav-bar__buttons-item--subscribe" onClick={ () => window.location.href="/"}>Contactar</button>                                                                                                         
            </div>
        </Container>         
      </nav>
      <section id="nav-bar__responsive" className="nav-bar__responsive--none"  onClick={ disableMenu }>
        <ul id="nav-bar__responsive-list-id" className="nav-bar__responsive-list" onClick={ enableMenu }>
            <li className="nav-bar__responsive-li" ><Link className="nav-bar__responsive-item" to="/intro#start">Introducción</Link></li>
            <li className="nav-bar__responsive-li" ><Link className="nav-bar__responsive-item" to="/intro#customers">Consumidores</Link></li>
            <li className="nav-bar__responsive-li" ><Link className="nav-bar__responsive-item" to="/intro#how-does-it-work">¿Cómo Funciona?</Link></li>
            <li className="nav-bar__responsive-li" ><Link className="nav-bar__responsive-item" to="/intro#business">Negocios</Link></li>
        </ul>                                                       
      </section>
    </React.Fragment>
  );
}

export default Header;