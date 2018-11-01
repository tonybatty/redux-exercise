import React from 'react';
import SearchContainer from '../containers/SearchContainer';
import CharacterResultsContainer from '../containers/CharacterResultsContainer';

class App extends React.Component {
  render(){
    return (
      <div>
        <h1>Star Wars Characters</h1>
        <SearchContainer />
        {/* <CharacterResultsContainer /> */}
      </div>
    )
  }
}

export default App;
