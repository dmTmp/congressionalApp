// @flow
import { combineReducers } from 'redux'
import { reducer as user } from './profileManagement/view.jsx'
import User from './profileManagement/user.jsx'
import Contact from './contactList/contact.jsx'
import contacts from './contactList/reducer.jsx'

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
const combined: (x:State, y:any) => State = combineReducers({
  windowVars,
  user,
  contacts
})

export default combined

function updateFromStorage(localStore: {user?:string}): Array<{type:string}> {
    try {
      let usr = JSON.parse(localStore.user)
      return [
        //localStore.name !== undefined ? {type: 'UPDATE_NAME', newName:localStore.name} : {type:''}
        {type: 'REPLACE', payload:new User(usr.name, usr.rnd)}
      ]
    } catch(e) {
      console.error('user failed to parse from local storage', e)
      return []
    }
}
export {updateFromStorage}

function setLocalStorage(store, localStorage) {
  return () => {
    if (typeof(localStorage) !== "undefined") {
      localStorage.clear()
      let state = store.getState()
      localStorage.user = JSON.stringify(state.user)
    } else {
        console.warn('cannot store data on page close')
    }
  }
}
export {setLocalStorage}
export const initalize = function(store) {
    store.dispatch({type:'REPLACE', payload:new User('John Smith')})
    //store.dispatch({type:'UPDATE_NAME', newName:})
    updateFromStorage(localStorage)
      .forEach(e => store.dispatch(e))
    console.log(contacts)
    store.dispatch({type:'ADD_CONTACT', newContact:new Contact('Jane', '3498t53498gu89fug98f7896f')})
    console.log(store.getState())
    store.subscribe(setLocalStorage(store, localStorage))
}
