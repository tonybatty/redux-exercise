import { connect } from "react-redux";
import Search from  "../components/Search";
import { setQuery } from "../actions"

const mapStateToProps = state => {
    return {
        selectedQuery: state.searchInput.selectedQuery
    };
}

const mapDispatchToProps = dispatch => {
    return {
        handleChange: event => {
            console.log(event.target.value);
            dispatch(setQuery(event.target.value))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);