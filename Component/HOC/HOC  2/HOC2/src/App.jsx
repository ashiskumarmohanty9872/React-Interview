
import './App.css'

function UserData(WrappedComponents){
  return function(props){
    const userdata = {name: "Sibun", age:25}

    return <WrappedComponents {...props} user={userdata}/>
  }
};

// wrapped components

function UserComponents({user}){
  return(
    <div>
      <h3>Name : {user.name}</h3>
      <p>Age: {user.age}</p>
    </div>
  )
}

// Enhanced components

const EnhancedUser = UserData(UserComponents)

export default EnhancedUser 