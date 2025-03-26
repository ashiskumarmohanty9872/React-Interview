import React,{useState} from "react";

function UserContainer(){

    const [user , setUser] = useState({name:"Sibun" , age:25});

    const handleShowDetails = ()=>{
        alert(`Name: ${user.name} , Age:${user.age}`)
    }
    return(
        <>
            <UserProfile 
                name={user.name}
                age={user.age}
                onClick={handleShowDetails}
            />
        </>
    )
}

export default UserContainer;

function UserProfile({name ,age , onClick}){
    return(
        <>
            <h2>Name:{name}</h2>
            <p>Age:{age}</p>
            <button onClick={onClick} >Show Details</button>
        </>
    )
}