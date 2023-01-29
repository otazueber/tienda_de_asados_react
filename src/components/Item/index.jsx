import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css';

const Item = ({ product }) => {
    const { idProducto, imagen, descripcion, unidadMedida, precio } = product;
    const precioFormateado = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'ARS' }).format(parseFloat(precio))
    return (
        <div className="col-12 col-lg-3 pt-5">            
            <img className="producto ps-5" src={imagen} alt="Fhoto" />
            <p>{descripcion} <br />Precio por {unidadMedida}: {precioFormateado}</p>
            <div className="centrarElementos">
                <Link to={`/detail/${idProducto}`}>
                    <button className="btnAgregarProducto">Ver detalle</button>
                </Link>
            </div>            
        </div>
    )
}

export default Item