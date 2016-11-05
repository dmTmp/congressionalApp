// @flow

import { combineReducers } from 'redux'

import {Profile as Contact, User} from './profileManagement/profile.jsx'
import user, {updateProfile, deleteProfile, replaceProfile} from './profileManagement/state.jsx'
import contacts, {addContact} from './contactList/state.jsx'
import {updateFromStorage, setLocalStorage} from './localStore.jsx'

type WindowVarsState = {edit:boolean, saved:boolean}
function windowVars(state : WindowVarsState = {edit:true, saved:false}, action: {type: string, what?: string} = {type:'', what:''}): WindowVarsState {
  if (action.type ==='TOGGLE') {
    switch (action.what) {
      case undefined:
        return {
          ...state,
          edit: !state.edit
        }
      case 'EDIT':
        return {
          ...state,
          edit: !state.edit
        }
      case 'SAVE':
        return {
          ...state,
          saved: !state.saved
        }
    }
  }
  return state
}
export type State = {windowVars: WindowVarsState, user: User, contacts:Array<Contact>}
export default combineReducers({
  windowVars,
  user,
  contacts
})
export const initalize = function(store:any) {
    store.dispatch(replaceProfile(new User('John Smith'))) //defualt user
    updateFromStorage(localStorage)
      .forEach(e => store.dispatch(e)) //load variables from localStore if available
    store.dispatch(addContact(new Contact('Jane', '3498t53498gu89fug98f7896f')))
    store.dispatch(addContact(new Contact('Jack', 'ljj8te349wlu8rdug98fr896f')))
    store.dispatch(addContact(new Contact('Jim', 'ljj8te349wlu8rdug98fr896f')))
    store.subscribe(setLocalStorage(store, localStorage)) //update localStorage on dispatch
}
