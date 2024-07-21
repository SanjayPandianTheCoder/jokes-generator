import { useState } from 'react'
import Joke from './components/Joke'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='jokeapp'>
      <h1>JOKE GENERATOR</h1>
      <Joke/>
    </div>
        
  )
}

export default App
