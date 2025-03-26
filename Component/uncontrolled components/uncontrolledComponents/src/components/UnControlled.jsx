import React , {useRef} from "react";

function UnControlled(){

    const inputRef = useRef(null);
    const handleSubmit=(e)=>{
        e.preventDefault();
        alert(`Submitted value: ${inputRef.current.value}`)
    }


    return(
        <>
            <form onSubmit={handleSubmit}>
                <label >Emter Name:</label>
                <input
                
                type="text" 
                ref={inputRef}
                
                />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default UnControlled;