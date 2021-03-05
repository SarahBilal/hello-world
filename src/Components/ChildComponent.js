import React from 'react'

function ChildComponent(props) {
 return (
  <div>
   <h1>
   Interlinking Parent and Child</h1>
   <button onClick ={ props.greetHandler}>Greet Parent</button>
  </div>
 )
}

export default ChildComponent
