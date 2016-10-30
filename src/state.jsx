// @flow
import { combineReducers } from 'redux'
import { reducer as user } from './profileManagement/view.jsx'
import User from './profileManagement/user.jsx'

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
type State = {windowVars: WindowVarsState, user: User}
const combined: (x:State, y:any) => State = combineReducers({
  windowVars,
  user
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
