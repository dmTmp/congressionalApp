// @flow
import User from './profileManagement/user.jsx'

export const updateFromStorage = function(localStore: {user?:string}): Array<{type:string}> {
    try {
      let usr = JSON.parse(localStore.user)
      return [
        {type: 'REPLACE', payload:new User(usr.name, usr.rnd)}
      ]
    } catch(e) {
      console.error('user failed to parse from local storage', e)
      return []
    }
}

export const setLocalStorage = function(store, localStorage) {
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
