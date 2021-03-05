import React, { Component } from 'react'

class Form extends Component {

constructor(props) {
 super(props)

 this.state = {
   username:''
 }
}

handleUsernameChange=(event)=>{
 this.setState({ username : event.target.value})
}

 render() {
  return (
   <div>
    <h1>Form Making</h1>
    <form action="">
     <div>
      <label htmlFor="">UserName</label>
      <input type="text" value={this.state.username} onChange={this.handleUsernameChange}/>
     </div>
    </form>
   </div>
  )
 }
}

export default Form
