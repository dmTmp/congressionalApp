// @flow
import crypto from 'crypto'
import { connect } from 'react-redux'
import React from 'react'

class User {
    name: string
    rnd: number
    constructor(name: string, rnd: number = window.crypto.getRandomValues(new Uint32Array(1))[0]) {
        this.name = name
        this.rnd = rnd
    }
    getKey(): string /*hex*/ {
        const hash = crypto.createHash('sha256')
        hash.update(this.name + '\n' + this.rnd)
        return hash.digest('hex')
    }
    getAddress(): string /*hex*/ {
        const hash = crypto.createHash('sha256')
        hash.update(this.getKey())
        return hash.digest('hex')
    }
    display() {
      return {...this, key:this.getKey(), address:this.getAddress()}
    }
}
export default User

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
          console.log(action.newName, state)
          return typeof action.newName === 'string'  && typeof state === 'object'
            ? new User(action.newName, state.rnd)
            : reducer(undefined)
        default:
            return state
    }
}

export {reducer}

type ComponentProps = {name:string, address:string, delete:() => null, updateName:(x:any) => null}
const Initialize = (props:ComponentProps) => {
  return <div>
    <h1>Update Profile</h1>
    <p>name:{props.name}</p>
    <p>address:{props.address}</p>
    <img src='http://vignette4.wikia.nocookie.net/deusex/images/d/d4/JANUS1.png/revision/latest/scale-to-width-down/121?cb=20130607203345&path-prefix=en'/>
    <p onClick={props.delete}>DELETE</p>
    <input onChange={props.updateName}/>
  </div>
}
function mapStateToProps(state) {
  return state == null
    ? {name:'',          address:''}
    : {name: state.name, address: state.getAddress(),
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    delete: () => {
      dispatch({type:'DELETE'})
    },
    updateName: event => {
      //console.log(event.target.value)
      dispatch({type:'UPDATE_NAME', newName:event.target.value})
    }
  }
}
export const Container = connect(
  mapStateToProps
  , mapDispatchToProps
)(Initialize)
