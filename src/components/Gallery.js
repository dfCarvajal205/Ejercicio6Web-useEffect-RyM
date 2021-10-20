import { useEffect, useState } from 'react';
import React from 'react';
import './Gallery.css';
import { Card } from './Card';
import 'bootstrap/dist/css/bootstrap.css';

export const Gallery = (props) => {
  let [characters, setList] = useState([])
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
    .then(response => response.json())
    .then(data => setList(data.results))
  },[])

  return (
    <div className='gallery'>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    {characters.map((character) => (
      <Card
          name={character.name}
          img={character.image}
          key={character.id}
          gender={character.gender}
          status={character.status}
      /> 
    ))}
  </div>   
  );
}