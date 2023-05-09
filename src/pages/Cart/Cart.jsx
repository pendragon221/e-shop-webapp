import React from 'react'
import { connect } from 'react-redux'
import { CartItem } from '../../components/CartItem/CartItem'
import { bindActionCreators } from 'redux'
import { ADD_TO_CART_AC, DELETE_FROM_CART_AC } from '../../store/store'
import './Cart.css'

const Cart = ({ productsList, addToCart, deleteFromCart }) => {

    if (productsList.length === 0)
        return (
            <div className='cart' style={{ justifyContent: "center" }}>
                <h2>Корзина пуста</h2>
            </div>
        )
    else
        return (
            <>
                <div className='cart'>
                    {productsList.map((product) => (
                        <CartItem key={product.id} product={product} addToCart={addToCart} deleteFromCart={deleteFromCart} />
                    ))}
                </div>
                <div>
                    <button className='btn-default btn-MorePadding'>Оформить заказ</button>
                </div>
            </>
        )
}

const mapStateToProps = (state) => ({
    productsList: state.cart
})

const mapDispatchToProps = (dispatch) => ({
    addToCart: bindActionCreators(ADD_TO_CART_AC, dispatch),
    deleteFromCart: bindActionCreators(DELETE_FROM_CART_AC, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
