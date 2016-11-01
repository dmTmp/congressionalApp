// @flow
import { combineReducers } from 'redux'
import { reducer as user } from './profileManagement/view.jsx'
import User from './profileManagement/user.jsx'
import Contact from './contactList/contact.jsx'
import contacts from './contactList/reducer.jsx'
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
type State = {windowVars: WindowVarsState, user: User, contacts:Array<Contact>}
export default combineReducers({
  windowVars,
  user,
  contacts
})
export const initalize = function(store) {
    store.dispatch({type:'REPLACE', payload:new User('John Smith')})
    updateFromStorage(localStorage)
      .forEach(e => store.dispatch(e))
    console.log(contacts)
    store.dispatch({type:'ADD_CONTACT', newContact:new Contact('Jane', '3498t53498gu89fug98f7896f')})
    console.log(store.getState())
    store.subscribe(setLocalStorage(store, localStorage))
}
