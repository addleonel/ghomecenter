import * as React from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../assets/styles/Main.scss";
import ProductItem from "./ProductItem";
import { llantas, sistemaArrastre } from "../productsList.js";
const Products = () => {
    const listLlantas =  llantas.map((link) =>{
        return( 
            <React.Fragment>
                <ProductItem 
                    key={link.id}
                    name={link.name}
                    image={link.image}
                    price={link.price}
                    in_="in-products"
                />
            </React.Fragment>
        )
    });

    const listSistemaArrastre =  llantas.map((link) =>{
        return( 
            <React.Fragment>
                <ProductItem 
                    key={link.id}
                    name={link.name}
                    image={link.image}
                    price={link.price}
                    in_="in-products"
                />
            </React.Fragment>
        )
    });

    const listSistemaElectrico =  llantas.map((link) =>{
        return( 
            <React.Fragment>
                <ProductItem 
                    key={link.id}
                    name={link.name}
                    image={link.image}
                    price={link.price}
                    in_="in-products"
                />
            </React.Fragment>
        )
    });

    const listSistemaMotor =  llantas.map((link) =>{
        return( 
            <React.Fragment>
                <ProductItem 
                    key={link.id}
                    name={link.name}
                    image={link.image}
                    price={link.price}
                    in_="in-products"
                />
            </React.Fragment>
        )
    });


    const listLuces =  llantas.map((link) =>{
        return( 
            <React.Fragment>
                <ProductItem 
                    key={link.id}
                    name={link.name}
                    image={link.image}
                    price={link.price}
                    in_="in-products"
                />
            </React.Fragment>
        )
    });

    const listAccesorioMotor =  llantas.map((link) =>{
        return( 
            <React.Fragment>
                <ProductItem 
                    key={link.id}
                    name={link.name}
                    image={link.image}
                    price={link.price}
                    in_="in-products"
                />
            </React.Fragment>
        )
    });

    const listAccesorioPiloto =  llantas.map((link) =>{
        return( 
            <React.Fragment>
                <ProductItem 
                    key={link.id}
                    name={link.name}
                    image={link.image}
                    price={link.price}
                    in_="in-products"
                />
            </React.Fragment>
        )
    });

    const listSistemaFrenos =  llantas.map((link) =>{
        return( 
            <React.Fragment>
                <ProductItem 
                    key={link.id}
                    name={link.name}
                    image={link.image}
                    price={link.price}
                    in_="in-products"
                />
            </React.Fragment>
        )
    });

    return (
    <React.Fragment>
        <section style={{backgroundColor: "#99cdff"}} className="section-m section-1">
            <Container fluid="xxl">
                <div className="portal-phrase">
                    <h1 className="portal-title">
                    Descubre nuestros productos
                    </h1>
                    <p className="portal-subtitle">
                        Explora nuestro catalogo
                        
                    </p>
                </div>
            </Container>
        </section>
        <Container fluid="xxl">
            <h2 id="llantas" className="category">Llantas </h2>
            <div className="products">
                {listLlantas}
            </div>
            <h2 id="sistema-arrastre" className="category">Sistema de arrastre</h2>
            <div className="products">   
                {listSistemaArrastre}
            </div>
            <h2 id="sistema-electrico" className="category">Sistema electrico</h2>
            <div className="products">   
                {listSistemaElectrico}
            </div>
            <h2 id="sistema-motor" className="category">Sistema de motor</h2>
            <div className="products">   
                {listSistemaMotor}
            </div>
            <h2 id="luces" className="category">Luces</h2>
            <div className="products">   
                {listLuces}
            </div>
            <h2 id="accesorios-motor" className="category">Accesorios para motor</h2>
            <div className="products">   
                {listAccesorioMotor}
            </div>
            <h2 id="accesorios-piloto" className="category">Accesorios para piloto</h2>
            <div className="products">   
                {listAccesorioPiloto}
            </div>
            <h2 id="sistemas-frenos" className="category">Sistema de frenos</h2>
            <div className="products">   
                {listSistemaFrenos}
            </div>
        </Container>
    </React.Fragment>
  );
}

export default Products;