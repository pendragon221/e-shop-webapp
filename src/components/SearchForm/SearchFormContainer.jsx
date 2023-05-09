import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { SET_SEARCH_TEXT_AC, FIND_PRODUCTS_AC } from "../../store/store";
import { SearchForm } from "./SearchForm";

const mapStateToProps = state => {
    return {
        searchText: state.searchText
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setSearchText: bindActionCreators(SET_SEARCH_TEXT_AC, dispatch),
        onSearch: bindActionCreators(FIND_PRODUCTS_AC, dispatch)
    }
}

export const SearchFormContainer = connect(mapStateToProps, mapDispatchToProps)(SearchForm)