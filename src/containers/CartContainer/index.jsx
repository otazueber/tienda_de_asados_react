import React, { useContext } from 'react'
import { Shop } from '../../context/ShopProvider';
import generateOrderObject from '../../services/generateOrderObject';
import { collection, addDoc } from "firebase/firestore";
import { dataBase } from '../../firebase/config';
import { doc, updateDoc } from "firebase/firestore";
import { Link } from 'react-router-dom';
import CartItem from '../../components/CartItem';
import { Auth } from "../../context/AuthenticationProvider";


const Cart = () => {
    const { logedUser } = useContext(Auth)
    const { countCart, products, total, cleanCart } = useContext(Shop);
    let textoAMostrar = "Mi carrito"
    if (countCart() === 1) {
        textoAMostrar += " (1 producto)"
    } else {
        textoAMostrar += " (" + countCart() + " productos)"
    }

    const precioFormateado = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'ARS' }).format(parseFloat(total()))
    const confirmPurchase = async () => {

        try {
            const order = generateOrderObject({
                email: logedUser.email,
                cart: products,
                total: total()
            })
            const docRef = await addDoc(collection(dataBase, "orders"), order);
            cleanCart()
            for (const productCart of products) {
                const productRef = doc(dataBase, "products", productCart.idProducto);
                await updateDoc(productRef, {
                    stock: productCart.stock - productCart.quantity
                });
            }

            alert("Orden confirmada con ID: " + docRef.id);

        } catch (error) {
            console.log(error);
        } finally {
        }
    }

    return (
        <>
            {
                products.length !== 0 ?
                    <>
                        <div className="row">
                            <div className="col-12 col-lg-4">
                                <h1 className="p-5">{textoAMostrar}</h1>
                            </div>
                            <div className="col-12 col-lg-4 pt-5 centrarElementos">
                                {
                                    logedUser ?
                                        <button onClick={confirmPurchase} className="btnAgregarProducto">Finalizar compra {precioFormateado}</button>
                                        :
                                        <Link to="/login" className="textLink">
                                            <button className="btnAgregarProducto">Inicia seción para finalizar tu pedido</button>
                                        </Link>
                                }
                            </div>
                        </div>
                        <div className='row px-5'>
                            {products.map(producto => {
                                return <CartItem product={producto} key={producto.idProducto} />
                            })}
                        </div>
                    </>
                    :
                    <>
                        <div className="centrarElementos">
                            <img src="../assets/img/carrito.png" alt="Carrito" />
                        </div>
                        <div className="centrarElementos">
                            <h1 className="py-5">Tu carrito está vacío</h1>
                        </div>
                        <div className="centrarElementos">
                            <p>No tienes productos en tu carrito de compras.</p>
                        </div>
                        <div className="centrarElementos">
                            <Link to="/" className="textLink">
                                <button className="btnAgregarProducto">Seguir navegando</button>
                            </Link>
                            <br /><br /><br /><br /><br /><br /><br /><br />
                        </div>
                    </>
            }
        </>
    )
}

export default Cart