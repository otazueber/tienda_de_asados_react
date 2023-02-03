import React from "react";
import "./styles.css";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget";
import "bootstrap/dist/css/bootstrap.min.css";
import User from "../User";

export default function NavBar() {
    return (
        <div>
            <div className="row">
                <div className="col-12 col-lg-12 d-flex justify-content-center">
                    <Link to="/"><img className="logo" src="/assets/img/logo_Not_Vegan.png" alt="Logo" /></Link>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-lg-2 d-flex justify-content-center" style={{ width: "24%" }}>
                    <User/>
                </div>
                <div className="col-6 col-lg-8 d-flex justify-content-center" style={{ width: "50%" }}>
                    <Navbar className="d-flex justify-content-center" collapseOnSelect expand="lg" bg="black" variant="dark">
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ borderColor: "white" }} />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <div >
                                <Nav className="mr-auto">
                                    <Link to="/" className="textLink">Inicio</Link>
                                    <Link to="/category/vacunos" className="textLink">Vacunos</Link>
                                    <Link to="/category/cerdo" className="textLink">Cerdo</Link>
                                    <Link to="/category/aves" className="textLink">Aves</Link>
                                    <Link to="/category/mar" className="textLink">Mar</Link>
                                    <Link to="/category/embutidos" className="textLink">Embutidos</Link>
                                    <Link to="/category/achuras" className="textLink">Achuras</Link>
                                    <Link to="/category/elaborados" className="textLink">Elaborados</Link>
                                    <Link to="/category/quesos" className="textLink">Quesos</Link>
                                    <Link to="/category/helados" className="textLink">Helados</Link>
                                    <Link to="/category/almacen" className="textLink">Almacén</Link>
                                    <Link to="/category/vinos" className="textLink">Vinos</Link>
                                    <Link to="/category/fuego" className="textLink">Fuego</Link>
                                </Nav>
                            </div>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <div className="col-6 col-lg-2 d-flex justify-content-center" style={{ width: "26%" }}>
                    <CartWidget />
                </div>
            </div>
        </div>


    );
}