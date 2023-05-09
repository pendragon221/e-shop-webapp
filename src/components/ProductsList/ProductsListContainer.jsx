import { ProductsList } from "./ProductsList";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ADD_PRODUCTS_AC, ADD_TO_CART_AC, FETCH_PRODUCTS_AC } from "../../store/store";

const mapStateToProps = (state) => {
    return {
        products: state.products,
        loading: state.loading,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addProducts: bindActionCreators(ADD_PRODUCTS_AC, dispatch),
        addToCart: bindActionCreators(ADD_TO_CART_AC, dispatch),
        fetchProducts: bindActionCreators(FETCH_PRODUCTS_AC, dispatch)
    }
}

const ProductsListContainer = connect(mapStateToProps, mapDispatchToProps)(ProductsList)

export { ProductsListContainer }