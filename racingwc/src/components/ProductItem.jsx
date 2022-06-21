import React, {useState} from "react";
import "../assets/styles/Main.scss";
import buttonURL from "../utils.js";
import { Button, Modal} from "react-bootstrap";

const ProductItem= (props) => {
    const contactURL = buttonURL;
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
    const class_= "c-item" + props.in_;
    return (
        <React.Fragment>
            <div className={class_}>
                <p className="c-image">
                    <img src={props.image} width="300px" alt="" />
                </p>
                <p className="c-title">
                   {props.name}
                </p>
                <p className="c-price">
                    S/ {props.price}
                </p>
                <Button variant="primary" className="c-book" onClick={handleShow}>
                    Reservar
                </Button>
            
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
            </div>
        </React.Fragment>
    );
}

export default ProductItem;