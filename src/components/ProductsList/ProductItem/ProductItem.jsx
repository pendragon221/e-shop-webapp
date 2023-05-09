import React from "react";
import { ProductInfo } from "../../ProductInfo/ProductInfo";
import './ProductItem.css'

export const ProductItem = ({ product, addToCart }) => {

    const productInfoProps = {
        ...product,
        image: {
            src: product.image,
            width: 80,
            height: 100
        }
    }

    return (
        <div className="card">
            <ProductInfo product={productInfoProps} />
            <button
                className="btn-default btn-smaller"
                type="button"
                onClick={() => addToCart(product)}>
                Добавить в корзину
            </button>
        </div>
    )
}