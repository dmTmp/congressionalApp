// @flow
import crypto from 'crypto-browserify'
import React from 'react'
import {Profile as Contact} from '../profileManagement/profile.jsx'

function View(props:{profile:Contact}) {
  const pic = props.profile.picture
  return <div style={{borderBottom: 'inset 4px black'}}>
    <h3>{props.profile.name}</h3>
    <img src={pic !== undefined ? pic : 'http://vignette4.wikia.nocookie.net/deusex/images/d/d4/JANUS1.png/revision/latest/scale-to-width-down/121?cb=20130607203345&path-prefix=en'}/>
    <p>{props.profile.getAddress()}</p>
    <button>send message</button>
  </div>
}
function ViewList(props:{contacts:Array<Contact>}) {
  return <div style={{width:'50%', float:'right'}}>{props
    .contacts
    .map(x => <View profile={x}/>)}</div>
}
export {ViewList as View}
