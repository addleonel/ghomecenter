import * as React from "react";
import "../assets/styles/Footer.scss";
import moto from "../assets/static/logo/moto.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import buttonURL from "../utils";
import { Container } from "react-bootstrap";
import "../assets/styles/About.scss";
const About = () => {
  const contactURL = buttonURL;
  return (
    <React.Fragment>
        <Container>
            <div className="about-content">
                <div className="about-content-text">
                    <h1>About</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec euismod, nisi vel consectetur consectetur, nisl
                        nisi consectetur, nisi vel consectetur consectetur, nisl
                        nisi consectetur, nisi vel consectetur consectetur, nisl
                        nisi consectetur, nisi vel consectetur consectetur, nisl
                
                    </p>
                </div>
            </div>
        </Container>
    </React.Fragment>
  );
}

export default About;