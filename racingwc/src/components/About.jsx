import * as React from "react";
import "../assets/styles/Footer.scss";
import { Container } from "react-bootstrap";
import "../assets/styles/About.scss";
const About = () => {
  return (
    <React.Fragment>
        <Container>
            <div className="about-content">
                <div className="about-content-text">
                    <h1>Sobre Nosotros</h1>
                 
                    <h2>Misión</h2>
                    
                    <p>
                    Somos una empresa dedicada a la venta y comercialización de repuestos originales y accesorios para motocicletas, apoyados en un equipo humano calificado que con actitud de servicio y honestidad brinda asesoría personalizada y servicio técnico a usuarios de motocicletas en diferentes puntos de ventas ubicados estratégicamente en la ciudad de Huánuco. Contamos con disponibilidad de repuestos y accesorios para atender las necesidades del mercado local logrando así la competitividad y la rentabilidad.
                    </p>
                    <h2>Visión</h2>
                    <p>
                    Ser la mejor opción para los usuarios de motocicletas, para transporte, trabajo, diversión o deporte, a nivel local y nivel nacional, así como la opción preferida para todos los canales de distribución de repuestos y accesorios para motocicletas. Para nuestros colaboradores una fuente segura de trabajo y de desarrollo profesional y laboral. 
                    </p>

                    <h2>Objetivos</h2>
                    <ul>
                        <li>Ofrecer un servicio de calidad en la venta de motocicletas y accesorios originales.</li>
                        <li>Cumplir y superar las expectativas de nuestros clientes.</li>
                        <li>Capacitar a nuestro personal de forma continua.</li>
                        <li>Fidelizar a nuestros clientes mediante la entrega de una propuesta de excelencia</li>
                    </ul>
                    <h2>Historia</h2>
                    <p>
                    Racing Motors es un grupo empresarial peruano fundado en 1998, que se dedica a la importación y representación de las mejores marcas en motocicletas, repuestos, accesorios e indumentaria, para (motocicletas, scooters, trimoviles y cuatrimotos) nuestras 2 centros de distribución ubicados en ciudades estratégicas de nuestra ciudad de huanuco, nos permite lograr la cobertura total a nivel local y atender a nuestros clientes, con rapidez y eficiencia, que sumado a nuestras 5 líneas de negocio: línea de lubricantes, línea de motocicletas, línea de repuestos y accesorios, línea de neumáticos, nos permiten lograr cumplir con los requerimientos y surtido que nuestros clientes solicitan. una característica importante de nuestra empresa es la de trabajar desde su creación, con las mejores marcas y calidad en cada línea; con marcas líderes a nivel nacional e internacional.
                    </p>
                  
                </div>
            </div>
        </Container>
    </React.Fragment>
  );
}

export default About;