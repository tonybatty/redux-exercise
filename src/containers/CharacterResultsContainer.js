import { connect } from "react-redux";
import CharacterResults from  "../components/CharacterResults";

const mapStateToProps = state => {
    return {
        characters: state.results
    };
}



export default connect(mapStateToProps)(CharacterResults);;