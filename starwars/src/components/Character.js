// Write your Character component here
import React from "react";


function Character(props) {

    const { character } = props;

    return (
        <div>
            <h1>{character.name}</h1>
            <h2>{character.hairColor}</h2>
            <h2>{character.birthYear}</h2>
            <h2>{character.gender}</h2>
        </div>
    )

}

export default Character;