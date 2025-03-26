import React from "react";
import { useState } from "react";

function Parent(){
    const [count ,setCount] = useState(0);

    return(
        <>
            <h2>Parent Count: ${count}</h2>
            <ChildComponents count={count} increment={()=> setCount(count + 1)}/>
        </>
    )
}

function ChildComponents({count , increment}){
    return(
        <>
            <h3>Child count:{count}</h3>
            <button onClick={increment}>Increment from child</button>
        </>
    )
}

export default Parent;