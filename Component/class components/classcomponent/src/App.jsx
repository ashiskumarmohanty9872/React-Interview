import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'

function App() {
  return (
   <>
    <h1> Class Component</h1>
    <Greet name="Sibun" />
   </>
  )
}

class Greet extends React.Component{
  render(){
    return <h1>Hello , {this.props.name} !</h1>
  }
}

export default App
