import React, { useState } from "react";

const ItemCount = ({ onAdd, stock, initial }) => {
    const [count, setCount] = useState(initial);

    const onPlus = () => {
        if (count < stock) setCount(count + 1);
    };

    const onDecrement = () => {
        if (count > initial) setCount(count - 1);
    };

    return (
        <div className="d-flex flex-row justify-content-center">
            <button className="btnAgregarProducto" onClick={onDecrement}><img className="btn-administrar" src="../assets/img/btnResta.png" alt="Icon"/></button>
            <div style={{width: "50px"}}><span>{count}</span></div>            
            <button className="btnAgregarProducto" onClick={onPlus}><img className="btn-administrar" src="../assets/img/btnSuma.png" alt="Icon"/></button>
            <button className="btnAgregarProducto" onClick={() => onAdd(count)}><img src="../assets/img/agregar.png" alt="imagen" />Agregar al carrito</button>
        </div>
    );
};

export default ItemCount;
