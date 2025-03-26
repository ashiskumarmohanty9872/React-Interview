import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function Home(){
    const {theme,toggleTheme} = useContext(ThemeContext)
    return(
       <div 
       style={{
        backgroundColor:theme === "light" ? "#fff" : "#333",
        color:theme === "light" ? "#000" : "#fff",
        padding: "20px",
        textAlign: "center"
       }}
       
       >
            <h1>{`Current Theme:${theme}`}</h1>
            <button onClick={toggleTheme}>Toggle Theme</button>
       </div>
    )
}

export default Home;