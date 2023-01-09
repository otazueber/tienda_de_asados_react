import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail';
import productosImportados from '../../data/json/products.json';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const { idProducto } = useParams()
    const promesa = new Promise((acc, rec) => {
        setTimeout(() => {
            acc(productosImportados);
        }, 2000);
    });

    useEffect(() => {
        promesa
            .then(productos => {
                if (idProducto) {
                    setProduct(productos[parseInt(idProducto) - 1])
                }
            })
            .catch(() => {
                alert("No se pudo obtener la lista de productos")
            });
    })

    return (
        <div>
            <ItemDetail detail={product} />
        </div>
    )
}

export default ItemDetailContainer