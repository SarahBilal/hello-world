import React, { Component } from 'react'

export class ClassClick extends Component {

 clickHandler() {
console.log('button Clicked');
  }

 render() {
  return (
   <div>
    <h1>Class Component Click Handler</h1>
    <button onClick= {this.clickHandler}>Click Me</button>
    
   </div>
  )
 }
}

export default ClassClick
