import React from 'react'
import './styles.css';

const ItemDetail = ({ detail }) => {
    const { idProducto, imagen, descripcion, unidadMedida, precio } = detail;
    const precioFormateado = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'ARS' }).format(parseFloat(precio))
    return (
        <div className="row">
            <div className="col-12 col-lg-12 centrarElementos">
                <img className="ps-5 foto" src={imagen} alt="Fhoto" />
                <p>{descripcion} <br />Precio por {unidadMedida}: {precioFormateado}</p>
                <div className="centrarElementos">
                    <button id={`${idProducto}`} className="btnAgregarProducto"><img src="../assets/img/agregar.png" alt="imagen" />Agregar al carrito</button>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail