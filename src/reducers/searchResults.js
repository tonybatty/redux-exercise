
function searchResults(state = [], action){
  switch (action.type) {
    case 'RECEIVE_CHARACTERS':
      // return {
      //   state: action.characters
      // }
      return 
        action.results
      

    default:
      return state
  }
}

export default searchResults;