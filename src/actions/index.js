export function setQuery(query){
    return {
        type: 'SET_QUERY',
        selectedQuery: query
    }
}



export function receiveCharacters(result){
    return {
      type: 'RECEIVE_CHARACTERS',
      characters: result
    }
  }

export function submitQuery(searchString){
    console.log(searchString)
    return function(dispatch, getState){
        // const {reduxState} = getState();
      fetch(`https://swapi.co/api/people/?search=${searchString}`)
        .then(response => response.json())
        .then(result => {
            console.log(result)
          dispatch(receiveCharacters(result))
          dispatch(setQuery(''))
        })
        .catch(function(error) {
          // something went wrong. let's sort it out
        });
    }
};