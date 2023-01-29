import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Shop } from "../../context/ShopProvider";
import ItemCount from "../ItemCount";
import './styles.css';

const ItemDetail = ({ detail }) => {

    const [quantity, setQuantity] = useState(0)
    const { addProduct } = useContext(Shop)
    const onAdd = (cantidad) => {
        setQuantity(cantidad)
        addProduct({ ...detail, quantity: cantidad })
    }

    const { imagen, descripcion, unidadMedida, precio, stock } = detail;
    const precioFormateado = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'ARS' }).format(parseFloat(precio))
    return (
        <div className="row">
            <div className="col-12 col-lg-12 centrarElementos">
                <img className="ps-5 foto" src={imagen} alt="Fhoto" />
                <p>{descripcion} <br />Precio por {unidadMedida}: {precioFormateado}</p>
                <div className="centrarElementos">
                    {
                        quantity === 0 ?
                            <ItemCount
                                stock={stock}
                                initial={1}
                                onAdd={onAdd}
                            />
                            :
                            <button className="btnAgregarProducto"><img src="../assets/img/agregar.png" alt="imagen" />
                                <Link to="/cart" className="textLink">
                                    ir al carrito
                                </Link>
                            </button>
                    }
                </div>
            </div>
        </div>
    )
}

export default ItemDetail