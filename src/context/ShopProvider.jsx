import React, { useState, useEffect } from 'react'
import { createContext } from "react";

export const Shop = createContext()

const ShopProvider = ({ children }) => {

    const [products, setProducts] = useState([])
    const [orderID, setOrderID] = useState("")
    const elProductoYaExiste = (idProducto) => products.some(product => product.idProducto === idProducto)

    const addProduct = (product) => {
        if (elProductoYaExiste(product.idProducto)) {
            const productoRepetido = products.find(element => element.idProducto === product.idProducto)
            productoRepetido.quantity += product.quantity
            setProducts([...products])
        } else {
            setProducts([...products, product])
        }
        setOrderID("")
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

    const removeProduct = (idProducto) => {
        const productsFiltered = products.filter(product => product.idProducto !== idProducto);
        setProducts(productsFiltered)
    }

    function leerCarritoDeLocalStorage() {
        let jsonCarrito = localStorage.getItem("carrito");
        if (jsonCarrito != null) {
            const carrito = JSON.parse(jsonCarrito);
            return carrito
        } else {
            return []
        }
    }

    function grabarCarritoEnLocalStorage(cart) {
        localStorage.setItem("carrito", JSON.stringify(cart));
    }
    function guardarOrderID(id){
        setOrderID(id)
    }

    useEffect(() => {
        setProducts(leerCarritoDeLocalStorage())
    }, [])

    useEffect(() => {
        grabarCarritoEnLocalStorage(products)
    }, [products]);

    return (
        <Shop.Provider value={{ products, addProduct, countCart, total, cleanCart, removeProduct, guardarOrderID, orderID }}>
            {children}
        </Shop.Provider>
    )
}

export default ShopProvider