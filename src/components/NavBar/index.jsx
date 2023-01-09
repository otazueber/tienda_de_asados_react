import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget";
import './styles.css';

export default function NavBar() {
    return (
        <>
            <div className="row">
                <div className="col-12 col-lg-12 d-flex justify-content-center">
                    <Link to="/"><img className="logo" src="/assets/img/logo_Not_Vegan.png" alt="Logo" /></Link>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-lg-2"></div>
                <div className="col-8 col-lg-8">
                    <nav className="navbar navbar-expand-lg navbar-light justify-content-center">
                        <div className="collapse navbar-collapse justify-content-center">
                            <ul className="navbar-nav" style={{ color: "white", fontFamily: "Assistant", fontSize: "20px" }}>
                                <li className="nav-item">
                                    <Link to="/" style={{ textDecoration: "none", color: "white" }}>Inicio</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/category/vacunos" style={{ textDecoration: "none", color: "white" }}>Vacunos</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/category/cerdo" style={{ textDecoration: "none", color: "white" }}>Cerdo</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/category/aves" style={{ textDecoration: "none", color: "white" }}>Aves</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/category/mar" style={{ textDecoration: "none", color: "white" }}>Mar</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/category/embutidos" style={{ textDecoration: "none", color: "white" }}>Embutidos</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/category/achuras" style={{ textDecoration: "none", color: "white" }}>Achuras</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/category/elaborados" style={{ textDecoration: "none", color: "white" }}>Elaborados</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/category/quesos" style={{ textDecoration: "none", color: "white" }}>Quesos</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/category/helados" style={{ textDecoration: "none", color: "white" }}>Helados</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/category/almacen" style={{ textDecoration: "none", color: "white" }}>Almacén</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/category/vinos" style={{ textDecoration: "none", color: "white" }}>Vinos</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/category/fuego" style={{ textDecoration: "none", color: "white" }}>Fuego</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className="col-6 col-lg-2 display-flex">
                    <CartWidget />
                </div>
            </div>
        </>
    );
}