import React from "react";
import Gchild from "./Gchild";

function ChildComponents({userName}){
    return(
        <>
            <Gchild  userName={userName}/>
        </>
    )
}
export default ChildComponents;
   
