import React, { useState } from 'react'

function Joke() {
  const [joke, setJoke] = useState('')
  async function getJoke(){
    const url = 'https://v2.jokeapi.dev/joke/Any?type=single';
    const response = await fetch(url);
    const responseJson = await response.json();

    setJoke(responseJson.joke)

  }   
  return (
    <div className='joke'>
        <h2>{joke}</h2>
        <button onClick={getJoke} className='jokebtn'>GENERATE</button>
    </div>
  )
}

export default Joke