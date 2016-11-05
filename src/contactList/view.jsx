// @flow
import crypto from 'crypto-browserify'
import React from 'react'
import {Profile as Contact} from '../profileManagement/profile.jsx'
import View from './contact/view.jsx'
import {connect} from 'react-redux'
import type {State} from '../state.jsx'
import type {State as ContactState} from './contact/state.jsx'

export default function Contacts(props:{contacts:Array<ContactState>}) {
  return <div style={{width:'50%', float:'right', overflow:'auto'}}>{
    props
    .contacts
    .map(x => <View profile={x.profile}/>)
  }</div>
}
function mapStateToProps(state:State) {
  return {contacts:state.contacts}
}
export const Container = connect(mapStateToProps)(Contacts)
