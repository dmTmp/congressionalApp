// @flow
import crypto from 'crypto-browserify'
import React from 'react'
import {Profile as Contact} from '../profileManagement/profile.jsx'
import View from './contact/view.jsx'

export default function(props:{contacts:Array<Contact>}) { 
  return <div style={{width:'50%', float:'right', overflow:'auto'}}>{props
    .contacts
    .map(x => <View profile={x}/>)}</div>
}
