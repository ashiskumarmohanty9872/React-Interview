import React from "react";

function Message(WrappedComponents){
  return function(props){
    return(
      <>
          <p>This is a message from HOC!</p>
          < WrappedComponents  {...props}/>
      </>
    )
  }
}

// Wrapped component

function Hello(){
  return <h2> Hello World !!</h2>
}

// Enhaced componnets

const EnhancedComponets = Message(Hello);

export default EnhancedComponets;

