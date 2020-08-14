import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";
import Character from "./components/Character.js"

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [ characters, setCharacters ] = useState([]);

  useEffect(() => {
    axios.get("https://swapi.dev/api/people/")
    .then(response => {
      const characterArray = response.data.results.map(character => {
        const characterObj = {
          name: character.name,
          hairColor: character.hair_color,
          birthYear: character.birth_year,
          gender: character.gender
        }
        return characterObj;
      })
      setCharacters(characterArray);
    })
    .catch(error => {
      console.log(error);
    })
  }, [])

  


  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {characters.map(character => <Character character={character} />)}
    </div>
  );
}

export default App;
