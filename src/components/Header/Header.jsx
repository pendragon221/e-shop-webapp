import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import './Header.css'
import { SearchFormContainer } from '../SearchForm/SearchFormContainer';

const mapStateToProps = (state) => {
    return {
        productsCount: state.cart.length
    }
}

const Header = ({ productsCount = 0 }) => {

    return (
        <div className='header'>
            <div className="menu-wrapper">
                <div className="menu">
                    <div className="d-flex align-center">
                        <Link to="/" className='link'>E-shop</Link>
                        <SearchFormContainer />
                    </div>

                    <Link to="/cart" className='link'>
                        Корзина (<span className='red'> {productsCount} </span>)
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default connect(mapStateToProps)(Header)
