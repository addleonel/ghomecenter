import React, {useEffect} from "react";

import { Fade } from "react-awesome-reveal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from '../assets/static/logo/ghc_logo192.png';
import bars from '../assets/static/icons/bars.svg';

import '../assets/styles/Header.scss';


const Header = () => {

  // Change background color on scroll
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

  // display company options 
  useEffect(() => {
    let buttonoptions = document.getElementById('nav-bar__buttons-item--company-id');
    let options = document.getElementById('nav-bar-options-company-id');
    let optionsContainer = document.getElementById('nav-bar-options-company-container-id');
    buttonoptions.addEventListener('mouseover', () => {
      options.style.display = 'block';
      optionsContainer.style.display = 'block';
      document.getElementById('navbarroot-id').style.background = 'transparent';
    });
    buttonoptions.addEventListener('mouseout', () => {
      options.style.display = 'none';
      optionsContainer.style.display = 'none';
    });
    options.addEventListener('mousemove', () => {
      options.style.display = 'block';
      optionsContainer.style.display = 'block';
      document.getElementById('navbarroot-id').style.background = 'transparent';
    });
    options.addEventListener('mouseleave', () => {
      options.style.display = 'none';
      optionsContainer.style.display = 'none';
      document.getElementById('navbarroot-id').style.background = '#fff';
    });     
  });
  
  const hideCompanyOptions = () => {
    let options = document.getElementById('nav-bar-options-company-id');
    let optionsContainer = document.getElementById('nav-bar-options-company-container-id');
    options.style.display = 'none';
    optionsContainer.style.display = 'none';
    document.getElementById('navbarroot-id').style.background = '#fff';
  }

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
              {/* <img className="nav-bar__logo-image" src={ logo } alt=""/> */}
                 <span className="nav-bar__logo-text">Logo</span>
            </Link>
            <button className="nav-bar__button-item nav-bar__buttons-item--subscribe nav-bar__buttons-item--subscribe-responsive" onClick={ () => window.location.href="/"}>Contactar</button>
            
            <div className="nav-bar__display" id="nav-bar__display-id" onClick={ displayResponsive }>
                <img className="nav-bar__display-icon" src={ bars } alt=""/> 
            </div>
            
            <div className="nav-bar__buttons">
                <button id="nav-bar__buttons-item--company-id" className="nav-bar__buttons-item nav-bar__buttons-item--company">Empresa <FontAwesomeIcon icon="fa-solid fa-caret-down" /></button>
                <Link className="nav-bar__buttons-item nav-bar__buttons-item--business"  to="/intro">Productos</Link>
                <button className="nav-bar__button-item nav-bar__buttons-item--subscribe" onClick={ () => window.location.href="/"}>Contactar</button>                                                                                                         
            </div>
        </Container>         
      </nav>
        <div id="nav-bar-options-company-container-id">
          <div id="nav-bar-options-company-id" className="nav-bar-options">
              <Container className="options-items">
                <Fade cascade direction="right" duration={500}>
                  <Link className="nav-bar__buttons-item items-container" to="/about" onClick={hideCompanyOptions}>
                    <FontAwesomeIcon className="items-icon" icon="fa-solid fa-address-card"/>
                    <h3 className="items-title">Sobre nosotros</h3>
                    <p className="items-text">Somos una empresa de granito de calidad, con más de 20 años de experiencia en el mercado.</p>
                  </Link>
                  <Link className="nav-bar__buttons-item items-container" to="/contact" onClick={hideCompanyOptions}>
                    <FontAwesomeIcon className="items-icon" icon="fa-solid fa-address-book"/>
                    <h3 className="items-title">Contacto</h3>
                    <p className="items-text">Somos una empresa de granito de calidad, con más de 20 años de experiencia en el mercado.</p>
                  </Link>
                </Fade> 
              </Container>
          </div>
        </div>
      <section id="nav-bar__responsive" className="nav-bar__responsive--none"  onClick={ disableMenu }>
        <ul id="nav-bar__responsive-list-id" className="nav-bar__responsive-list" onClick={ enableMenu }>
            <li className="nav-bar__responsive-li" ><Link className="nav-bar__responsive-item" to="/about">Sobre Nosotros</Link></li>
            <li className="nav-bar__responsive-li" ><Link className="nav-bar__responsive-item" to="/contact">Contacto</Link></li>
            <li className="nav-bar__responsive-li" ><Link className="nav-bar__responsive-item" to="/products">Productos</Link></li>
        </ul>                                                       
      </section>
    </React.Fragment>
  );
}

export default Header;