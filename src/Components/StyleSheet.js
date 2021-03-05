import React from 'react'
import './Mystyles.css'

const h2 = {
 fontSize : '40px',
 color : 'orange'
}
function StyleSheet() {
 return (
  <div>
   <h1 className= 'primary'>StyleSheet</h1>
   <h2 style= {h2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae dolorem enim nihil voluptatem. Odio laudantium at a sunt quo. Eveniet omnis fugit impedit blanditiis saepe sint, consectetur nam suscipit porro?</h2>
  </div>
 )
}

export default StyleSheet

