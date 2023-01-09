import productosImportados from '../../data/json/products.json';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList';
import './styles.css';

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const { categoryId } = useParams()
    const promesa = new Promise((acc, rec) => {
        setTimeout(() => {
            acc(productosImportados);
        }, 2000);
    });

    useEffect(() => {
        promesa
            .then(productos => {
                if (categoryId) {
                    const productosFiltrados = productos.filter(p => p.categoryId === categoryId)
                    setProducts(productosFiltrados)
                }
            })
            .catch(() => {
                alert("No se pudo obtener la lista de productos")
            });
    })

    return (
        <>
            <div className="row">
                <div className="col-12 col-lg-12">
                    <h1 className="p-5">{categoryId.charAt(0).toUpperCase() + categoryId.slice(1)}</h1>
                </div>
            </div>
            <ItemList productos={products} />
        </>
    )
}

export default ItemListContainer