import { useEffect } from "react";
import { ProductItem } from "./ProductItem/ProductItem";
import { Loader } from "../Loader/Loader";
import './ProductsList.css'

const ProductsList = ({ products = [], loading, addToCart, fetchProducts }) => {

    useEffect(() => {
        fetchProducts()
    }, [fetchProducts])

    const isListEmpty = products.length === 0

    if (loading) {
        return (
            <Loader />
        )
    }

    if (isListEmpty) {
        return (
            <h2 style={{ textAlign: "center" }}>Ничего не найдено</h2>
        )
    }
    return (
        <div className="products">
            {products.map(product => (
                <ProductItem key={product.id} product={product} addToCart={addToCart} />)
            )}
        </div >
    )
}

export { ProductsList }