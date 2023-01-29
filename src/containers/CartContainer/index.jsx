import React, { useContext } from 'react'
import { Shop } from '../../context/ShopProvider';
// import generateOrderObject from '../../services/generateOrderObject';
// import { collection, addDoc } from "firebase/firestore";
// import { dataBase } from '../../firebase/config';
// import { doc, updateDoc } from "firebase/firestore";
import { Link } from 'react-router-dom';
import CartItem from '../../components/CartItem';

const Cart = () => {

    const { products, total, cleanCart } = useContext(Shop);
    // // const [loader, setLoader] = useState(false);
    // // const confirmPurchase = async () => {

    //     try {
    //         //setLoader(true);

    //         const order = generateOrderObject({
    //             nombre: "Sebas",
    //             email: "sebastian@gmail.com",
    //             telefono: "123123123",
    //             cart: products,
    //             total: total()
    //         })

    //         // setFormVis(true);


    //         // Add a new document with a generated id.
    //         const docRef = await addDoc(collection(dataBase, "orders"), order);
    //         cleanCart()
    //         //Posteriormente actualizar el stock de los productos existentes.
    //         for (const productCart of products) {
    //             const productRef = doc(dataBase, "products", productCart.id);

    //             // Set the "capital" field of the city 'DC'
    //             await updateDoc(productRef, {
    //                 stock: productCart.stock - productCart.quantity
    //             });
    //         }

    //         alert("Orden confirmada con ID: " + docRef.id);

    //     } catch (error) {
    //         console.log(error);
    //     } finally {
    //         //setLoader(false);
    //     }
    // }

    return (
        <>
            {
                products.length !== 0 ?
                    <>
                        <div className='row px-5'>
                            {products.map(producto => {
                                return <CartItem product={producto} key={producto.idProducto} />
                            })}
                        </div>
                        {/* {
                            loader ?
                                <h2>Cargando ... </h2>
                                :
                                <button onClick={confirmPurchase}>Confirm purchase</button>
                        } */}
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
                            <p>No tienes productos en tu carrito de compra.</p>
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