import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characterObj, setCharacterObj] = useState(null);

  useEffect(() => {
    axios.get("https://swapi.dev/api/people/")
    .then(response => {
      const {name, homeWorld, birthYear, gender, films} = response.data;
      const characterObj = {
        name: name,
        homeWorld: homeWorld,
        birthYear: birthYear,
        gender: gender,
        films: films,
      }
      console.log(gender);
      setCharacterObj(characterObj);
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    })
  }, [])


  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
    </div>
  );
}

export default App;
