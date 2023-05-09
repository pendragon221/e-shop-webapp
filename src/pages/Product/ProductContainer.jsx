import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ADD_TO_CART_AC, FETCH_PRODUCT_AC } from "../../store/store";
import { Product } from "./Product";

const mapStateToProps = (state) => {
    return {
        product: state.currentProduct,
        loading: state.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: bindActionCreators(ADD_TO_CART_AC, dispatch),
        fetchProduct: bindActionCreators(FETCH_PRODUCT_AC, dispatch)
    }
}

export const ProductContainer = connect(mapStateToProps, mapDispatchToProps)(Product)