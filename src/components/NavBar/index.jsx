import React from "react";
import CartWidget from "../CarWidget";
import './styles.css';


export default function NavBar() {

    return (
        <div className="container-fluid font bground">
            <div className="row">
                <div className="col-12 col-lg-12 d-flex justify-content-center">
                    <a href="#inicio"><img className="logo" src="/assets/img/logo_Not_Vegan.png" alt="Logo" /></a>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-lg-4"></div>
                <div className="col-6 col-lg-4">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a href="#inicio">Inicio</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#vacunos">Vacunos</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#almacen">Almacén</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#vinos">Vinos</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#contacto">Contacto</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <CartWidget />
            </div>
        </div>
    );
}