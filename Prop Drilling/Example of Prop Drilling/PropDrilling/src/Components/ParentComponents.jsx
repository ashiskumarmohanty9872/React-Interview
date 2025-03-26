import React from "react";
import ChildComponents from "./ChildComponents";

function ParentComponents({userName}){
    return(
        <ChildComponents userName={userName}/>
    )
}
export default ParentComponents;