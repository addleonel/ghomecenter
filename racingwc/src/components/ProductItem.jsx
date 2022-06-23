import React, {useState} from "react";
import "../assets/styles/Main.scss";
import buttonURL from "../utils.js";
import { Button, Modal} from "react-bootstrap";

const ProductItem= (props) => {
    const contactURL = buttonURL;
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
    const class_= "c-item" + ` ${props.in_}`;
    return (
        <React.Fragment>
            <div className={class_}>
                <div className="c-image">
                    <img src={props.image} width="300px" alt="" />
                </div>
                <p className="c-title">
                   {props.name} - {props.mark}
                </p>
                <p className="c-price">
                    S/ {props.price}
                </p>
                <Button variant="primary" className="c-book" onClick={handleShow}>
                    Reservar
                </Button>
            
                <Modal show={show} onHide={handleClose} size="lg" centered  style={{ borderRadius: "10px !important",}}>
                    <Modal.Header closeButton>
                    <Modal.Title style={{fontWeight: "bold"}}>Reservar Producto</Modal.Title>
                    </Modal.Header>
                    <Modal.Body >
                       
                        <div className="content-modal-elements">
                            <img className="modal-image" src={props.image} width="250px" alt="" />
                            <div style={{margin: "10px 20px",}}>
                                <p>
                                Para reservar este producto, usted debe contactarse con nosotros
                                especificando el producto y su marca en el mensaje
                                </p>
                                <p className="c-title" style={{fontWeight:"bold"}}>
                                {props.name} - {props.mark}
                                </p>
                                <p className="c-price" style={{textAlign:"center", backgroundColor:"#ffd7bf", padding:"10px 20px", borderRadius: "10px",}}>
                                    S/ {props.price}
                                </p>
                                <Button className="modal-contact-button" variant="primary" onClick={() => window.location.href = contactURL}>
                                    Contactar y hacer reserva
                                </Button>
                            </div>
                        </div>
                       
                    </Modal.Body>
                    
                </Modal>
            </div>
        </React.Fragment>
    );
}

export default ProductItem;