import React , { useState, useEffect } from "react";
import Slider from "react-slick";
import { Container } from "react-bootstrap";
import "../assets/styles/Main.scss";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Main = () => {
	const [sliderState, setSladerState] = useState({
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 1
	});

	useEffect(()=>{
		if (window.innerWidth <= 1160) {
			setSladerState({ 	
				...sliderState,
				slidesToShow: 4,
			});
		}
		if (window.innerWidth <= 923) {
			setSladerState({ 	
				...sliderState,
				slidesToShow: 3,
			});
		}

		if (window.innerWidth <= 710) {
			setSladerState({ 	
				...sliderState,
				slidesToShow: 2,
			});
		}

		if (window.innerWidth <= 450) {
			setSladerState({ 	
				...sliderState,
				slidesToShow: 1,
			});
		}
		
		if (window.innerWidth > 1160) {
			setSladerState({ 	
				...sliderState,
				slidesToShow: 5,
			});
		}
	})

	return (
		<React.Fragment>
			<section className="section-m section-1">
				<div>
					
				</div>
			</section>
			<section className="section-m section-2">
				<Container fluid="xxl">
					<h2 className="category">Categoria 1</h2>
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
					</div>
					<h2 className="category">Categoria 2</h2>
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
					</div>
				</Container>
			</section>
		</React.Fragment>
  );
}

export default Main;