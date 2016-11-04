// @flow
import {User} from './profile.jsx'

type ActionType = {type:string, payload?:User, newName?:string}
export default function(state:User = new User(''), action:ActionType = {type:''}):User {
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
export const deleteProfile = function() {
    return {type:'DELETE'}
}
export const replaceProfile = function(newProfile) {
    return {type:'replace', payload:newProfile}
}
export const updateProfile = function(newName) {
    return {type:'UPDATE', newName:newName}
}