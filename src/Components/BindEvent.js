import React, { Component } from 'react'

class BindEvent extends Component {

constructor(props) {
 super(props)

 this.state = {
   message: 'Hello'
 }
}
 clickHandler = () => {
  this.setState({
   message: 'Goodbye'
  })
 }


 render() {
  return (
   <div>
    <h1>Event Binding</h1>
    <div> <h2>{this.state.message} </h2> </div>
    <button onClick = {this.clickHandler}>Click</button>
   </div>
  )
 }
}

export default BindEvent
