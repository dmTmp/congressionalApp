// @flow
import React from 'react'
import {Profile as Contact} from '../../profileManagement/profile.jsx'

export default function (props:{profile:Contact}) {
  const pic = props.profile.picture
  return <div style={{borderBottom: 'inset 4px black'}}>
    <h3>{props.profile.name}</h3>
    <img src={pic !== undefined ? pic : 'http://vignette4.wikia.nocookie.net/deusex/images/d/d4/JANUS1.png/revision/latest/scale-to-width-down/121?cb=20130607203345&path-prefix=en'}/>
    <p>{props.profile.getAddress()}</p>
    <button>send message</button>
  </div>
}
