import React, { Component } from 'react'

class Counter extends Component {

constructor(props) {
 super(props)

 this.state = {
   count: 0
 }
}
increment(){
 this.setState({
  count: this.state.count + 1
 })
}
decrement(){
 this.setState({
  count: this.state.count-1 
 })
}

 render() {
  return (
   <div>
     <div>
         <h1> Count - {this.state.count}</h1>
     </div>
     <button onClick = {() =>this.increment()}>Increment</button>
     <button onClick= {()=> this.decrement()}>Decrement</button>
   </div>
  )
 }
}

export default Counter
