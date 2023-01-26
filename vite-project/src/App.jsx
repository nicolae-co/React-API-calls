import { useState, useEffect } from 'react'

import './App.css'

function App() {
  const [starWarsData, setStarWarsData] = useState({})
  const [count, setCount] = useState(0)
  

  useEffect(()=>{
    console.log("effect ran")
    // fetch("https://swapi.dev/api/people/1")
        //     .then(res => res.json())
        //     .then(data => console.log(data))
  },[])

  return (
    <div>
        <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        <h2>The count is {count}</h2>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
    </div>
  )
}

export default App
