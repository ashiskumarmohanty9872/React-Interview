import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
   <>
    <UseProfile name="Sibun" age="25"/>
   </>
  )
}

export default App

function UseProfile({name , age , onClick}){
  return (
    <>
      <h2>Name:{name}</h2>
      <p>Age:{age}</p>
      <button onClick={onClick} >Show details</button>
    </>
  )
}
