import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
  <>
      <h1></h1>
      < Greet name="Sibun" />
      
  </>
  )
}

function Greet(props){
  return(
    <>
      <h1>Hello , {props.name}</h1>
    </>
  )
}

export default App
