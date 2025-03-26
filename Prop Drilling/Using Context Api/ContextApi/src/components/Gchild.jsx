import React from "react";
import UserContext from "../contexts/UserContext";
import { useContext } from "react";



function Gchild(){
    const userName = useContext(UserContext)

    return(
        <>
            <h2> Hello , {userName}</h2>
        </>
    )
}
export default Gchild;