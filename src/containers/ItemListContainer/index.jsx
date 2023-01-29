import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList';
import './styles.css';
import { dataBase } from '../../firebase/config';
import { collection, getDocs, query, where } from 'firebase/firestore';
import SpinnerLoader from '../../components/SpinnerLoader';

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [error, setError] = useState("")
    const { categoryId } = useParams()

    useEffect(() => {
        try {
            const getProducts = async () => {
                let querySnapshot;
                if (categoryId) {
                    const q = query(collection(dataBase, "products"), where("categoryId", "==", categoryId));
                    querySnapshot = await getDocs(q);
                } else {
                    querySnapshot = await getDocs(collection(dataBase, "products"));
                }
                const productosDescargados = [];

                let hayCategoria = false
                querySnapshot.forEach((doc) => {
                    hayCategoria = true
                    const product = {
                        idProducto: doc.id,
                        ...doc.data()
                    }
                    productosDescargados.push(product)
                }
                );
                if (hayCategoria) {
                    setProducts(productosDescargados)
                } else {
                    setError("Categoría de productos inexistente")
                }
                
            }

            getProducts();

        } catch (error) {
            setError(error.message)
        }
    }, [categoryId])

    function view() {
        if (Object.keys(products).length === 0) {
            if (error) {
                return <div style={{ display: "flex", justifyContent: "center" }}><h3>{error}</h3></div> 
            } else {
                return <SpinnerLoader />
            }
        } else {
            return <>
                <div className="row">
                    <div className="col-12 col-lg-12">
                        <h1 className="p-5">{categoryId.charAt(0).toUpperCase() + categoryId.slice(1)}</h1>
                    </div>
                </div>
                <ItemList productos={products} />
            </>
        }
    }

    return (
        view()
    )
}

export default ItemListContainer