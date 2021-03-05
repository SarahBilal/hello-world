import React, {Component} from 'react';

class Subscribe extends Component{

 constructor(){
 super()
 this.state={
  message: 'Click on the Subscribe Button to get important news about our Channel'
 }
 }
 changeMessage(){
  this.setState({
   message: 'Thankyou for Subscribing'
  })
 }

 render(){
 return ( <div>

  <h1> {this.state.message}</h1>
  <button onClick= {() => this.changeMessage()}>Subscribe</button>
 </div>

 )
 }
}

export default Subscribe