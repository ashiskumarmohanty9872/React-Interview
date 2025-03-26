import React from "react";
import { useState } from "react";
import { createContext } from "react";

const ThemeContext = createContext();


 function ThemeProvider({children}){

    const [theme , setTheme]= useState("light")

    function toggleTheme(){
        setTheme((prevTheme)=>(prevTheme === "light" ? "dark" : "light"))
    }

    return(
        <>
            <ThemeContext.Provider value={{ theme, toggleTheme}}>
                {children}
            </ThemeContext.Provider>
        </>
    )
}

export {ThemeContext}
export default ThemeProvider;