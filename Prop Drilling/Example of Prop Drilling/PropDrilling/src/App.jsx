import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ParentComponents from './Components/ParentComponents'

function App(){
  return(
    <>
      <ParentComponents userName="Sibun" />
    </>
  )
}

export default App
