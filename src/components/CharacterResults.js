import React from "react";

function CharacterResults({result}) {

  return (
    <div>
      <ul>
        {result.map(character => (
          console.log(character)
            <li key={character.name}>
            <h2>{character.name}</h2>
            <img src={character.image}/>
          </li>
          )
        )}

      </ul>


    </div>
  );

}

export default CharacterResults;
