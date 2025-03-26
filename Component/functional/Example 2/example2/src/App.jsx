import { useState } from 'react'
import './App.css'
function App(){
  const [count , setCount] = useState(0)

  return(
    <>
      <p>Count: {count}</p>
      <button onClick={()=> setCount(count + 1)}>Increment</button> {'\u00A0'}
      <button onClick={()=> setCount(count-1)}>Decrement</button>
    </>
  )
}

export default App;
