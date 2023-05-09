import React from 'react'
import { CounterPanel } from '../CounterPanel/CounterPanel'
import './CartItem.css'
import { ProductInfo } from '../ProductInfo/ProductInfo'

export const CartItem = ({ product, addToCart, deleteFromCart }) => {


    const increase = () => {
        addToCart(product)
    }
    const decrease = () => {
        deleteFromCart(product)
    }

    const productInfoProps = {
        ...product,
        price: product.price * product.count,
        image: {
            src: product.image,
            width: 80,
            height: 100
        }
    }

    return (
        <div className="cart-item">
            <ProductInfo product={productInfoProps} />
            <CounterPanel increase={increase} decrease={decrease} count={product.count} />
        </div>
    )
}
