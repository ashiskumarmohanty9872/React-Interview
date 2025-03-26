import React, { useState } from 'react'


function Control(){

    // State to store input value
    const [name,setName] = useState('')

    // Handle input change
    const handleChange = (e)=>{
        setName(e.target.value) // Update state with input value
    }

    // Handle form submission

    const handleSubmit = (e)=>{
        e.preventDefault();
        alert(`form submitted with Name: ${name}`)
    }

    // style

    const inputStyle = {
       padding: 10,
       marginLeft:5,
       marginRight:15
      };

      
    


    return(
        <>
            <form onSubmit={handleSubmit}>
                <label >Name:
                    <input 
                        style={inputStyle}
                        type='text'
                        value={name} //controlled by state
                        onChange={handleChange} //updtes state on change
                    />
                </label>
                <button  type="submit">Submit</button>
            </form>
        </>
    )
}
export default Control;