// @flow
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import User from './profileManagement/user.jsx'
import state, { updateFromStorage, setLocalStorage } from './state.jsx'
import App from './app.jsx'

const store = createStore(state)
store.dispatch({type:'REPLACE', payload:new User('person')})
store.dispatch({type:'UPDATE_NAME', newName:'John Smith'})
updateFromStorage(localStorage)
  .forEach(e => store.dispatch(e))
console.log(updateFromStorage(localStorage))
store.subscribe(setLocalStorage(store, localStorage))

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
  , document.getElementById('react'))