// @flow
import {User} from './profile.jsx'
import { connect } from 'react-redux'
import React from 'react'
import EditableText from '../editable.jsx'
import {deleteProfile, replaceProfile, updateProfile} from './state.jsx'

type ComponentProps = {name:string, address:string, delete:() => void, updateName:(x:any) => void, edit:boolean, toggleEdit:() => void}
const Initialize = (props:ComponentProps) =>
  <div style={{display:'inline-block', width:'50%', float:'left'}}>
    <h1>Update Profile</h1>
    <img style={{display:'block', margin:'0 auto'}} src='http://vignette4.wikia.nocookie.net/deusex/images/d/d4/JANUS1.png/revision/latest/scale-to-width-down/121?cb=20130607203345&path-prefix=en'/>
    <EditableText lastValue={props.name} edit={props.edit} update={props.updateName} toggleEdit={props.toggleEdit}/>
    <p>address:{props.address}</p>
    <button onClick={props.delete}>DELETE</button>
  </div>

//redux bindings
function mapStateToProps(state) {
  const x = state.user == null
    ? {name:'',          address:''}
    : {name: state.user.name, address: state.user.getAddress(),
  }
  return {
    ...x,
    edit: state.windowVars.edit
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    delete: () => {
      dispatch(deleteProfile())
    },
    updateName: event => {
      dispatch(updateProfile(event.target.value))
    },
    toggleEdit: () => {
      dispatch({type:'TOGGLE'})
    }
  }
}
export const Container = connect(
  mapStateToProps
  , mapDispatchToProps
)(Initialize)
