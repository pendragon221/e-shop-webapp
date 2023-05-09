import React from "react"
import { Link } from "react-router-dom"

export const ProductInfo = ({ product }) => {

    const { id, title, image, price } = product
    const { src, width, height } = image

    return (
        <>
            <Link to={`/products/${id}`}>
                <h3>{title}</h3>
            </Link>

            <img src={src}
                alt=""
                width={width + 'px'}
                height={height + 'px'} />

            <span> {(price).toFixed(2)}$ </span>
        </>
    )
}