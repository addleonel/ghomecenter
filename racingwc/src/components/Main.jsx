import React , { useState, useEffect } from "react";
import Slider from "react-slick";
import { Container, Button, Modal} from "react-bootstrap";
import "../assets/styles/Main.scss";
import video from "../assets/static/video/video1.mp4";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import buttonURL from "../utils.js";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// product images

const Main = () => {
	const contactURL = buttonURL;
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const [showp, setShowp] = useState(5);
	const sliderState = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: showp,
		slidesToScroll: 1
	}

	useEffect(()=>{	
		window.addEventListener('load', () => {
			if (window.innerWidth <= 450) {
				setShowp(1);
			}
		});
	}, []);

	useEffect(()=>{	
		window.addEventListener('resize', () => {
			if (window.innerWidth <= 1160) {
				setShowp(4);
			}
		});
		window.addEventListener('resize', () => {
			if (window.innerWidth <= 923) {
				setShowp(3);
			}
		});

		window.addEventListener('resize', () => {
			if (window.innerWidth <= 710) {
				setShowp(2);
			}
		});

		window.addEventListener('resize', () => {
			if (window.innerWidth <= 450) {
				setShowp(1);
			}
		});

		window.addEventListener('resize', () => {
			if (window.innerWidth > 1160) {
				setShowp(5);
			}
		});
	}, []);

	return (
		<React.Fragment>
			<section className="section-m section-1">
				<Container>
					<div className="section-1-content">
						<div className="portal-phrase">
							<h1 className="portal-title">
							Compra Repuestos Multimarcas en General
							</h1>
							<p className="portal-subtitle">
								Servicio técnico especializado en motocicletas y motores menores
								
							</p>
							<button 
                                className="principal__message-button"
                                onClick={() => window.location.href = contactURL}
                            >
                                Contactanos ahora
                            </button>
						</div>
						<div className="portal-media">
							<img className="portal-image pimage-1" src="https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/271830144_3039380062980739_2031031125507542809_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=tE9hmojjzjkAX-xvlEl&tn=3RXRreKQDGxF6YYQ&_nc_ht=scontent-lim1-1.xx&oh=00_AT96MpbLcXMMsjJ-8LLTq7Kj5D_yIfZh-0etspTbI6i74A&oe=62B657E2" alt="" />
							<img className="portal-image pimage-2"src="https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/272263958_3042277879357624_3408080719838212641_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=x5P6I9m8fQwAX_TAq0e&tn=3RXRreKQDGxF6YYQ&_nc_ht=scontent-lim1-1.xx&oh=00_AT9KjUXMfQWKGAqLUM0HPxH7rzcMuGU3Sw7_og5xLdLx1A&oe=62B64B83" alt="" />
							<video className="portal-video" src={video} type="video/mp4" autoPlay muted loop></video>
						</div>
					</div>
				</Container>
			</section>
			<section className="section-m section-2">
				<Container fluid="xxl">
					<h2 className="category">Llantas</h2>
					<div className="c-container">
						<Slider {...sliderState}>
							<div>
								<div className="c-item">
									<p href="/" className="c-image">
										<img src="https://m.media-amazon.com/images/I/61qBw-N4g1L._AC_SL1024_.jpg" width="300px" alt="" />
									</p>
									<p className="c-title">
										Apple Macbook Air 11-incj MD233LL/A 4GB RAM. 128GB SSD - Silver
									</p>
									<p className="c-price">
										s/1,999.00
									</p>
									<Button variant="primary" className="c-book" onClick={handleShow}>
										Reservar
									</Button>
								</div>
							</div>
							<div>
								<div className="c-item">
									<a href="/" className="c-image">
										<img src="https://m.media-amazon.com/images/I/61qBw-N4g1L._AC_SL1024_.jpg" width="300px" alt="" />
									</a>
									<a href="/" className="c-title">
										Apple Macbook Air 11-incj MD233LL/A 4GB RAM. 128GB SSD - Silver
									</a>
									
									<p className="c-price">
										s/1,999.00
									</p>
								</div>
							</div>
							<div>
								<div className="c-item">
									<a href="/" className="c-image">
										<img src="https://m.media-amazon.com/images/I/61qBw-N4g1L._AC_SL1024_.jpg" width="300px" alt="" />
									</a>
									<a href="/" className="c-title">
										Apple Macbook Air 11-incj MD233LL/A 4GB RAM. 128GB SSD - Silver
									</a>
									
									<p className="c-price">
										s/1,999.00
									</p>
								</div>
							</div>
							<div>
								<div className="c-item">
									<a href="/" className="c-image">
										<img src="https://m.media-amazon.com/images/I/61qBw-N4g1L._AC_SL1024_.jpg" width="300px" alt="" />
									</a>
									<a href="/" className="c-title">
										Apple Macbook Air 11-incj MD233LL/A 4GB RAM. 128GB SSD - Silver
									</a>
									
									<p className="c-price">
										s/1,999.00
									</p>
								</div>
							</div>
							<div>
								<div className="c-item">
									<a href="/" className="c-image">
										<img src="https://m.media-amazon.com/images/I/61qBw-N4g1L._AC_SL1024_.jpg" width="300px" alt="" />
									</a>
									<a href="/" className="c-title">
										Apple Macbook Air 11-incj MD233LL/A 4GB RAM. 128GB SSD - Silver
									</a>
									
									<p className="c-price">
										s/1,999.00
									</p>
								</div>
							</div>
							<div>
								<div className="c-item">
									<a href="/" className="c-image">
										<img src="https://m.media-amazon.com/images/I/61qBw-N4g1L._AC_SL1024_.jpg" width="300px" alt="" />
									</a>
									<a href="/" className="c-title">
										Apple Macbook Air 11-incj MD233LL/A 4GB RAM. 128GB SSD - Silver
									</a>
									
									<p className="c-price">
										s/1,999.00
									</p>
								</div>
							</div>
							<div>
								<div className="c-item">
									<a href="/" className="c-image">
										<img src="https://m.media-amazon.com/images/I/61qBw-N4g1L._AC_SL1024_.jpg" width="300px" alt="" />
									</a>
									<a href="/" className="c-title">
										Apple Macbook Air 11-incj MD233LL/A 4GB RAM. 128GB SSD - Silver
									</a>
									
									<p className="c-price">
										s/1,999.00
									</p>
								</div>
							</div>
						</Slider>
						<HashLink style={{textDecoration: "none"}} to="/products/#llantas">Ver más</HashLink>
					</div>
					<h2 className="category">Sistema de arrastre</h2>
					<div className="c-container">
						<Slider {...sliderState}>
							<div>
								<div className="c-item">
									<a href="/" className="c-image">
										<img src="https://m.media-amazon.com/images/I/61qBw-N4g1L._AC_SL1024_.jpg" width="300px" alt="" />
									</a>
									<a href="/" className="c-title">
										Apple Macbook Air 11-incj MD233LL/A 4GB RAM. 128GB SSD - Silver
									</a>
									
									<p className="c-price">
										s/1,999.00
									</p>
								</div>
							</div>
							<div>
								<div className="c-item">
									<a href="/" className="c-image">
										<img src="https://m.media-amazon.com/images/I/61qBw-N4g1L._AC_SL1024_.jpg" width="300px" alt="" />
									</a>
									<a href="/" className="c-title">
										Apple Macbook Air 11-incj MD233LL/A 4GB RAM. 128GB SSD - Silver
									</a>
									
									<p className="c-price">
										s/1,999.00
									</p>
								</div>
							</div>
							<div>
								<div className="c-item">
									<a href="/" className="c-image">
										<img src="https://m.media-amazon.com/images/I/61qBw-N4g1L._AC_SL1024_.jpg" width="300px" alt="" />
									</a>
									<a href="/" className="c-title">
										Apple Macbook Air 11-incj MD233LL/A 4GB RAM. 128GB SSD - Silver
									</a>
									
									<p className="c-price">
										s/1,999.00
									</p>
								</div>
							</div>
							<div>
								<div className="c-item">
									<a href="/" className="c-image">
										<img src="https://m.media-amazon.com/images/I/61qBw-N4g1L._AC_SL1024_.jpg" width="300px" alt="" />
									</a>
									<a href="/" className="c-title">
										Apple Macbook Air 11-incj MD233LL/A 4GB RAM. 128GB SSD - Silver
									</a>
									
									<p className="c-price">
										s/1,999.00
									</p>
								</div>
							</div>
							<div>
								<div className="c-item">
									<a href="/" className="c-image">
										<img src="https://m.media-amazon.com/images/I/61qBw-N4g1L._AC_SL1024_.jpg" width="300px" alt="" />
									</a>
									<a href="/" className="c-title">
										Apple Macbook Air 11-incj MD233LL/A 4GB RAM. 128GB SSD - Silver
									</a>
									
									<p className="c-price">
										s/1,999.00
									</p>
								</div>
							</div>
							<div>
								<div className="c-item">
									<a href="/" className="c-image">
										<img src="https://m.media-amazon.com/images/I/61qBw-N4g1L._AC_SL1024_.jpg" width="300px" alt="" />
									</a>
									<a href="/" className="c-title">
										Apple Macbook Air 11-incj MD233LL/A 4GB RAM. 128GB SSD - Silver
									</a>
									
									<p className="c-price">
										s/1,999.00
									</p>
								</div>
							</div>
							<div>
								<div className="c-item">
									<a href="/" className="c-image">
										<img src="https://m.media-amazon.com/images/I/61qBw-N4g1L._AC_SL1024_.jpg" width="300px" alt="" />
									</a>
									<a href="/" className="c-title">
										Apple Macbook Air 11-incj MD233LL/A 4GB RAM. 128GB SSD - Silver
									</a>
									
									<p className="c-price">
										s/1,999.00
									</p>
								</div>
							</div>
						</Slider>
						<HashLink style={{textDecoration: "none"}} to="/products/#sistema-arrastre">Ver más</HashLink>
					</div>
					<h2 className="category">Sistema Electrico</h2>
					<div className="c-container">
						<Slider {...sliderState}>
							<div>
								<div className="c-item">
									<a href="/" className="c-image">
										<img src="https://m.media-amazon.com/images/I/61qBw-N4g1L._AC_SL1024_.jpg" width="300px" alt="" />
									</a>
									<a href="/" className="c-title">
										Apple Macbook Air 11-incj MD233LL/A 4GB RAM. 128GB SSD - Silver
									</a>
									
									<p className="c-price">
										s/1,999.00
									</p>
								</div>
							</div>
							<div>
								<div className="c-item">
									<a href="/" className="c-image">
										<img src="https://m.media-amazon.com/images/I/61qBw-N4g1L._AC_SL1024_.jpg" width="300px" alt="" />
									</a>
									<a href="/" className="c-title">
										Apple Macbook Air 11-incj MD233LL/A 4GB RAM. 128GB SSD - Silver
									</a>
									
									<p className="c-price">
										s/1,999.00
									</p>
								</div>
							</div>
							<div>
								<div className="c-item">
									<a href="/" className="c-image">
										<img src="https://m.media-amazon.com/images/I/61qBw-N4g1L._AC_SL1024_.jpg" width="300px" alt="" />
									</a>
									<a href="/" className="c-title">
										Apple Macbook Air 11-incj MD233LL/A 4GB RAM. 128GB SSD - Silver
									</a>
									
									<p className="c-price">
										s/1,999.00
									</p>
								</div>
							</div>
							<div>
								<div className="c-item">
									<a href="/" className="c-image">
										<img src="https://m.media-amazon.com/images/I/61qBw-N4g1L._AC_SL1024_.jpg" width="300px" alt="" />
									</a>
									<a href="/" className="c-title">
										Apple Macbook Air 11-incj MD233LL/A 4GB RAM. 128GB SSD - Silver
									</a>
									
									<p className="c-price">
										s/1,999.00
									</p>
								</div>
							</div>
							<div>
								<div className="c-item">
									<a href="/" className="c-image">
										<img src="https://m.media-amazon.com/images/I/61qBw-N4g1L._AC_SL1024_.jpg" width="300px" alt="" />
									</a>
									<a href="/" className="c-title">
										Apple Macbook Air 11-incj MD233LL/A 4GB RAM. 128GB SSD - Silver
									</a>
									
									<p className="c-price">
										s/1,999.00
									</p>
								</div>
							</div>
							<div>
								<div className="c-item">
									<a href="/" className="c-image">
										<img src="https://m.media-amazon.com/images/I/61qBw-N4g1L._AC_SL1024_.jpg" width="300px" alt="" />
									</a>
									<a href="/" className="c-title">
										Apple Macbook Air 11-incj MD233LL/A 4GB RAM. 128GB SSD - Silver
									</a>
									
									<p className="c-price">
										s/1,999.00
									</p>
								</div>
							</div>
							<div>
								<div className="c-item">
									<a href="/" className="c-image">
										<img src="https://m.media-amazon.com/images/I/61qBw-N4g1L._AC_SL1024_.jpg" width="300px" alt="" />
									</a>
									<a href="/" className="c-title">
										Apple Macbook Air 11-incj MD233LL/A 4GB RAM. 128GB SSD - Silver
									</a>
									
									<p className="c-price">
										s/1,999.00
									</p>
								</div>
							</div>
						</Slider>
						<HashLink style={{textDecoration: "none"}}to="/products/#sistema-electrico">Ver más</HashLink>
					</div>
					<h2 className="category">Sistema de Motor</h2>
					<div className="c-container">
						<HashLink style={{textDecoration: "none"}}to="/products/#sistema-electrico">Ver más</HashLink>
					</div>
					<h2 className="category">Luces</h2>
					<div className="c-container">
						<HashLink style={{textDecoration: "none"}}to="/products/#luces">Ver más</HashLink>
					</div>
					<h2 className="category">Accesorios de Motor</h2>
					<div className="c-container">
						<HashLink style={{textDecoration: "none"}}to="/products/#accesorios-motor">Ver más</HashLink>
					</div>
					<h2 className="category">Accesorios de Piloto</h2>
					<div className="c-container">
						<HashLink style={{textDecoration: "none"}}to="/products/#accesorios-piloto">Ver más</HashLink>
					</div>
					<h2 className="category">Sistemas de frenos</h2>
					<div className="c-container">
						<HashLink style={{textDecoration: "none"}}to="/products/#sistemas-frenos">Ver más</HashLink>
					</div>
				</Container>
			</section>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
				<Modal.Title>Reservar Producto</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<p>
					Para reservar este producto, usted debe contactarse con nosotros
					especificando el producto en el mensaje
					</p>
				</Modal.Body>
				<Modal.Footer>
				<Button variant="secondary" onClick={handleClose}>
					cerrar
				</Button>
				<Button variant="primary" onClick={() => window.location.href = contactURL}>
					Contactar
				</Button>
				</Modal.Footer>
			</Modal>
		</React.Fragment>
  );
}

export default Main;