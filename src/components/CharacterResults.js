import React from "react";

function CharacterResults({result}) {
  console.log(result)
  return (
    <div>
      <ul>
        {result.map(character => (
          
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
