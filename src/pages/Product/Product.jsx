import React from 'react'
import { useEffect } from 'react'
import { Loader } from '../../components/Loader/Loader'
import { useParams } from 'react-router-dom'

export const Product = ({ product, loading, addToCart, fetchProduct }) => {

    const { productId } = useParams()
    const { title, price, image, description } = product

    useEffect(() => {
        fetchProduct(productId)
    }, [fetchProduct, productId])

    if (loading)
        return <Loader />

    return (
        <div className="product-info">
            <h2> {title} </h2>

            <img
                src={image}
                alt=""
                width='160px'
                height='200px' />

            <p>{description}</p>

            <h3>{price}$</h3>

            <button
                className='btn-default'
                type="button"
                onClick={() => addToCart(product)}>
                Добавить в корзину
            </button>

        </div >
    )
}
