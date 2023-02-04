import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail';
import { dataBase } from '../../firebase/config';
import { doc, getDoc } from "firebase/firestore";
import SpinnerLoader from '../../components/SpinnerLoader';


const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [error, setError] = useState("")
    const { idProducto } = useParams()

    useEffect(() => {
        try {
            const getProduct = async () => {
                const docRef = doc(dataBase, "products", idProducto);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    const productDetail = {
                        idProducto: docSnap.id,
                        ...docSnap.data()
                    }
                    setProduct(productDetail);
                } else {
                    setError("Producto no encontrado")
                }
            }
            getProduct();
        } catch (error) {
            setError(error.message)
        }

    }, [idProducto])

    function view() {
        if (Object.keys(product).length === 0) {
            if (error) {
                return <div style={{ display: "flex", justifyContent: "center", paddingTop: "10%", paddingBottom: "16%" }}>
                    <h3>{error}</h3>
                    </div>
            } else {
                return <SpinnerLoader />
            }

        } else {
            return <ItemDetail detail={product} />
        }
    }

    return (
        <div>
            {
                view()
            }
        </div>
    )
}

export default ItemDetailContainer