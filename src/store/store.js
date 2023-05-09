import { json } from "react-router-dom"
import { createStore } from "redux"
import { applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { FakeStoryAPI } from "../services/fake-story-api"

let initState = {
    products: [],
    cart: [],
    loading: true,
    searchText: "",
    currentProduct: {}
}

const ADD_PRODUCTS = "ADD_PRODUCTS"
const ADD_TO_CART = "ADD_TO_CART"
const DELETE_FROM_CART = "DELETE_FROM_CART"
const CHANGE_AMOUNT = "CHANGE_AMOUNT"
const SET_LOADING = "SET_LOADING"
const SET_SEARCH_TEXT = "SET_SEARCH_TEXT"
const SET_CURRENT_PRODUCT = "SET_CURRENT_PRODUCT"
const SET_CART = "SAVE_CART"

export const ADD_PRODUCTS_AC = (products) => {
    return {
        type: ADD_PRODUCTS,
        newProducts: products
    }
}
export const ADD_TO_CART_AC = (product) => {
    return {
        type: ADD_TO_CART,
        product
    }
}
export const DELETE_FROM_CART_AC = (product) => {
    return {
        type: DELETE_FROM_CART,
        product
    }
}
export const CHANGE_AMOUNT_AC = (productId) => {
    return {
        type: CHANGE_AMOUNT,
        id: productId
    }
}
export const SET_LOADING_AC = (loading) => {
    return {
        type: SET_LOADING,
        loading
    }
}
export const SET_SEARCH_TEXT_AC = (text) => {
    return {
        type: SET_SEARCH_TEXT,
        text
    }
}
export const SET_CURRENT_PRODUCT_AC = (product) => {
    return {
        type: SET_CURRENT_PRODUCT,
        product
    }
}
export const FIND_PRODUCTS_AC = (searchText) => {
    return dispatch => {
        dispatch(SET_LOADING_AC(true))
        FakeStoryAPI.fetchAllProducts()
            .then(products => {
                dispatch(ADD_PRODUCTS_AC(products.filter(item => item.title.toLowerCase().includes(searchText.toLowerCase()))))
                dispatch(SET_LOADING_AC(false))
            })
            .catch(console.error)
    }
}
export const FETCH_PRODUCTS_AC = () => {
    return dispatch => {
        dispatch(SET_LOADING_AC(true))
        FakeStoryAPI.fetchAllProducts()
            .then(products => {
                dispatch(ADD_PRODUCTS_AC(products))
                dispatch(SET_LOADING_AC(false))
            })
            .catch(console.error)
    }
}
export const FETCH_PRODUCT_AC = (id) => {
    return dispatch => {
        dispatch(SET_LOADING_AC(true))
        FakeStoryAPI.fetchSingleProduct(id)
            .then(product => {
                dispatch(SET_CURRENT_PRODUCT_AC(product))
                dispatch(SET_LOADING_AC(false))
            })
            .catch(console.error)
    }
}
export const SET_CART_AC = (newCart) => {
    return {
        type: SET_CART,
        cart: newCart
    }
}

let newState;
let reducer = (state = initState, action) => {
    switch (action.type) {
        case SET_CART:
            return {
                ...state,
                cart: [...action.cart]
            }
        case ADD_PRODUCTS:
            return {
                ...state,
                products: [
                    ...action.newProducts
                ]
            }
        case ADD_TO_CART:
            console.log(action.product)
            if (state.cart.find(item => item.id === action.product.id)) {
                newState = {
                    ...state,
                    cart: [
                        ...state.cart.map(item => {
                            if (item.id === action.product.id)
                                item.count++
                            return item
                        })
                    ]
                }

            }
            else {
                newState = {
                    ...state,
                    cart: [
                        ...state.cart,
                        {
                            ...action.product,
                            count: 1
                        }
                    ]
                }
            }
            SaveCartToLocalStorage(newState.cart)
            return newState
        case DELETE_FROM_CART:
            if (state.cart.find(item => item.id === action.product.id)) {
                if (action.product.count === 1) {
                    newState = {
                        ...state,
                        cart: [
                            ...state.cart.filter(item => item.id !== action.product.id)
                        ]
                    }
                }
                else {
                    newState = {
                        ...state,
                        cart: [
                            ...state.cart.map(item => {
                                if (item.id === action.product.id)
                                    item.count--
                                return item
                            })
                        ]
                    }
                }
                SaveCartToLocalStorage(newState.cart)
                return newState
            }
            else
                return state
        case CHANGE_AMOUNT:
            return {
                ...state,
                cart: [
                    state.cart.map(product => {
                        if (product.id === action.id)
                            product.amount += action.amount
                        return product
                    }),
                ]
            }
        case SET_LOADING:
            return {
                ...state,
                loading: action.loading
            }
        case SET_SEARCH_TEXT:
            return {
                ...state,
                searchText: action.text
            }
        case SET_CURRENT_PRODUCT:
            return {
                ...state,
                currentProduct: { ...action.product }
            }
        default:
            return state
    }
}

const SaveCartToLocalStorage = (cart) => {
    localStorage.setItem('eshop-cart', JSON.stringify(cart))
}

export const store = createStore(reducer, initState, applyMiddleware(thunk))