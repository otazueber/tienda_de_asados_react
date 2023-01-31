import React, { useState } from 'react'
import { createContext } from "react";

export const Shop = createContext()

const ShopProvider = ({ children }) => {

    const [products, setProducts] = useState([])
    const elProductoYaExiste = (id) => {
        return products.some(product => product.id === id)
    }
    const addProduct = (product) => {
        if (elProductoYaExiste(product.id)) {
            const productoRepetido = products.find(element => element.id === product.id)
            productoRepetido.quantity += product.quantity
            setProducts([...products])
        } else {
            setProducts([...products, product])
        }
    }

    const countCart = () => {
        let cantidadTotal = 0;
        for (const product of products) {
            cantidadTotal += product.quantity
        }
        return cantidadTotal
    }


    const total = () => {
        let total = 0;
        for (const product of products) {
            total += product.precio * product.quantity
        }
        return total;
    }

    const cleanCart = () => {
        setProducts([])
    }

    const removeProduct = (id) => {
        const productsFiltered = products.filter(product => product.idProducto !== id);
        setProducts(productsFiltered)
    }

    return (
        <Shop.Provider value={{ products, addProduct, countCart, total, cleanCart, removeProduct }}>
            {children}
        </Shop.Provider>
    )
}

export default ShopProvider