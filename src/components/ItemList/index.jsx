import React from 'react'
import Item from '../Item'
import './styles.css';

const ItemList = ({ productos }) => {
    return (
        <div className='row px-5'>
            {productos.map(producto => {
                return <Item product={producto} key={producto.idProducto} />
            })}
        </div>
    )
}

export default ItemList