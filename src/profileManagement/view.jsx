// @flow
import User from './user.jsx'
import { connect } from 'react-redux'
import React from 'react'
import EditableText from '../editable.jsx'

type ActionType = {type:string, payload?:User, newName?:string}
function reducer(state:User = new User(''), action:ActionType = {type:''}):User {
    switch(action.type) {
        case 'DELETE':
            return reducer(undefined);
        case 'REPLACE':
          return typeof action.payload === 'object'
           ? action.payload
           : state
        case 'UPDATE_NAME': //only use in initial creation
          return typeof action.newName === 'string'  && typeof state === 'object'
            ? new User(action.newName, state.rnd)
            : reducer(undefined)
        default:
            return state
    }
}

export {reducer}

type ComponentProps = {name:string, address:string, delete:() => void, updateName:(x:any) => void, edit:boolean, toggleEdit:() => void}
const Initialize = (props:ComponentProps) =>
  <div style={{display:'inline-block', width:'50%', float:'left'}}>
    <h1>Update Profile</h1>
    <img style={{display:'block', margin:'0 auto'}} src='http://vignette4.wikia.nocookie.net/deusex/images/d/d4/JANUS1.png/revision/latest/scale-to-width-down/121?cb=20130607203345&path-prefix=en'/>
    <EditableText lastValue={props.name} edit={props.edit} update={props.updateName} toggleEdit={props.toggleEdit}/>
    <p>address:{props.address}</p>
    <button onClick={props.delete}>DELETE</button>
  </div>

function mapStateToProps(state) {
  const x = state.user == null
    ? {name:'',          address:''}
    : {name: state.user.name, address: state.user.address,
  }
  return {
    ...x,
    edit: state.windowVars.edit
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    delete: () => {
      dispatch({type:'DELETE'})
    },
    updateName: event => {
      dispatch({type:'UPDATE_NAME', newName:event.target.value})
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
