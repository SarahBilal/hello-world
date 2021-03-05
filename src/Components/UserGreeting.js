import React, { Component } from 'react'

class UserGreeting extends Component {

constructor(props) {
 super(props)

 this.state = {
   isLoggedIn: false
 }
}

 render() {

return this.state.isLoggedIn ? ( <div> Hello Fatima </div>) :
(<div> Hello Tahira </div>)

  
}

}
export default UserGreeting
