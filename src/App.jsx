import React from "react";
import { useEffect } from "react";
import Cart from "./pages/Cart/Cart";
import Header from "./components/Header/Header";
import { ProductsListContainer } from "./components/ProductsList/ProductsListContainer";
import { Routes, Route } from "react-router-dom";
import { ProductContainer } from "./pages/Product/ProductContainer";
import './App.css'
import { SET_CART_AC } from "./store/store";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setCart: bindActionCreators(SET_CART_AC, dispatch)
    }
}

function App({ setCart }) {

    useEffect(() => {
        console.log('Проверяем localStorage...')
        if (localStorage.getItem('eshop-cart') !== null) {
            console.log('Найдены данные в localStorage')
            const cart = JSON.parse(localStorage.getItem('eshop-cart'))
            setCart(cart)
        }
        else
            console.log('LocalStorage пуст')
    }, [setCart])

    return (
        <>
            <Header />
            <div className="content">
                <Routes>
                    <Route
                        path="/"
                        element={<ProductsListContainer />} />
                    <Route
                        path="/products/:productId"
                        element={<ProductContainer />} />
                    <Route
                        path="/cart"
                        element={<Cart />} />
                </Routes>
            </div>
        </>
    );
}
const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)

export default AppContainer
