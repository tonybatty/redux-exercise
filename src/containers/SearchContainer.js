import { connect } from "react-redux";
import Search from  "../components/Search";
import { setQuery, submitQuery } from "../actions"

const mapStateToProps = state => {
    return {
        selectedQuery: state.searchInput.selectedQuery
    };
}

const mapDispatchToProps = dispatch => {
    return {
        handleChange: (searchString) => {
            console.log(searchString);
            dispatch(setQuery(searchString))},
        
        submitSearch: (event, searchString) => {
           
            
            dispatch(submitQuery(searchString))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);