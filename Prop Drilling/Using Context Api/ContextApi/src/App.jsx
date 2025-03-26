import React  from 'react'
import './App.css'
import UserContext from './contexts/UserContext'
import ParentComponent from './components/ParentComponent'

function App() {

  return (
   <UserContext.Provider value="Sibun" >
    <ParentComponent />
   </UserContext.Provider>
  )
}

export default App
