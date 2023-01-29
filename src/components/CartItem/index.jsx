import React, { useContext } from 'react'
import { Shop } from '../../context/ShopProvider';

const CartItem = ({ product }) => {
    const { idProducto, imagen, descripcion, unidadMedida, precio, cantidad } = product;
    const precioFormateado = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'ARS' }).format(parseFloat(precio))
    const {removeProduct} = useContext(Shop);
    return (
    <div className="col-12 col-lg-3 box_producto pt-5">
        <img className="producto ps-5" src={imagen} alt={idProducto}/>
        <p>{descripcion}<br/>Precio por {unidadMedida}: {precioFormateado}</p>
        <p>Cantidad: {cantidad}</p>
        <button style={{backgroundColor: "#731386", color: "white"}} onClick={()=>removeProduct(idProducto)}><img className="btn-administrar" src="../assets/img/btnEliminar.png" alt="Icon"/>Eliminar</button> 
        {/* <img className="btn-administrar" src="../assets/img/btnResta.png" alt="Icon"/>
        <img className="btn-administrar" src="../assets/img/btnSuma.png" alt="Icon"/>
        <img className="btn-administrar" src="../assets/img/btnEliminar.png" alt="Icon"/> */}
    </div> 
    )
}
export default CartItem