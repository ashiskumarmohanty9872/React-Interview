import React from "react";

function DataComponents({data}){
    console.log("Data received:", data);
    return(
        <>
            <p>Data: {data}</p>
        </>
    )
}

export default DataComponents;