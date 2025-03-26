import EnhancedData from "./components/EnhancedData"
import './App.css'
import React from "react"


function App() {
  return (
    <div>
      <EnhancedData isLoading={true} />
      <EnhancedData isLoading={false} data="Hello World!" />
    </div>
  )
}

export default App
