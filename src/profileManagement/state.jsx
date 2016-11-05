// @flow
import {User} from './profile.jsx'

//type ActionType = {type:string, payload?:User, newName?:string}
export default function reducer(state:User = new User(''), action:DeleteProfile | ReplaceProfile | UpdateProfile):User {
    switch(action.type) {
        case 'PROFILE_DELETE':
            return reducer(undefined, action);
        case 'PROFILE_REPLACE':
          return action.payload
        case 'PROFILE_UPDATE_NAME': //only use in initial creation
          return new User(action.newName, state.rnd)
        default:
            return state
    }
}
type DeleteProfile = {type:'PROFILE_DELETE'}
export const deleteProfile = function():DeleteProfile {
    return {type:'PROFILE_DELETE'}
}
type ReplaceProfile = {type:'PROFILE_REPLACE', payload:User}
export const replaceProfile = function(newProfile:User):ReplaceProfile {
    return {type:'PROFILE_REPLACE', payload:newProfile}
}
type UpdateProfile = {type:'PROFILE_UPDATE_NAME', newName:string}
export const updateProfile = function(newName:string):UpdateProfile {
    return {type:'PROFILE_UPDATE_NAME', newName:newName}
}
