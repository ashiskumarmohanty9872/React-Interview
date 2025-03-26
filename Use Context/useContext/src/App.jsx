import  React from 'react'
import './App.css'
import ThemeProvider from './contexts/ThemeContext'
import Home from './components/Home'


function App() {

  return(
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  )
}

export default App
