import React, { useContext } from 'react'
import { Shop } from '../../context/ShopProvider';
import generateOrderObject from '../../services/generateOrderObject';
import { collection, addDoc } from "firebase/firestore";
import { dataBase } from '../../firebase/config';
import { doc, updateDoc } from "firebase/firestore";
import { Link } from 'react-router-dom';
import CartItem from '../../components/CartItem';

const Cart = () => {

    const { countCart, products, total, cleanCart } = useContext(Shop);
    let textoAMostrar = "Mi carrito"
    if (countCart() === 1) {
        textoAMostrar += " (1 producto)"
    } else {
        textoAMostrar += " (" + countCart() + " productos)"
    }

    const precioFormateado = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'ARS' }).format(parseFloat(total()))

    // // const [loader, setLoader] = useState(false);
    const confirmPurchase = async () => {

        try {
            //setLoader(true);

            const order = generateOrderObject({
                nombre: "Sebas",
                email: "sebastian@gmail.com",
                telefono: "123123123",
                cart: products,
                total: total()
            })

            // setFormVis(true);


            // Add a new document with a generated id.
            const docRef = await addDoc(collection(dataBase, "orders"), order);
            cleanCart()
            //Posteriormente actualizar el stock de los productos existentes.
            for (const productCart of products) {
                const productRef = doc(dataBase, "products", productCart.idProducto);

                // Set the "capital" field of the city 'DC'
                await updateDoc(productRef, {
                    stock: productCart.stock - productCart.quantity
                });
            }

            alert("Orden confirmada con ID: " + docRef.id);

        } catch (error) {
            console.log(error);
        } finally {
            //setLoader(false);
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
                                <button onClick={confirmPurchase} className="btnAgregarProducto">Finalizar compra {precioFormateado}</button>
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
                        </div>
                    </>
            }
        </>
    )
}

export default Cart