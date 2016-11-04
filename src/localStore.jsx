// @flow
import {User} from './profileManagement/profile.jsx'
import {replaceProfile} from './profileManagement/state.jsx'

export const updateFromStorage = function(localStore: {user?:string}): Array<{type:string}> {
  const getUser = user => {
    const usr = JSON.parse(user)
    return replaceProfile(new User(usr.name, usr.rnd))
  }
  const getUserErr = localStore => {
    if (localStore.user === undefined) return {type:''}
    return getUser(localStore.user)
  }
  return [
    getUserErr(localStore)
  ]
}

export const setLocalStorage = function(store:any, localStorage:any) {
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
