// @flow
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import User from './profileManagement/user.jsx'
import { Container } from './profileManagement/view.jsx'
import state from './state.jsx'

const store = createStore(state)
store.dispatch({type:'REPLACE', payload:new User('person')})
store.dispatch({type:'UPDATE_NAME', newName:'John Smith'})

ReactDOM.render(
  <Provider store={store}>
    <Container/>
  </Provider>
  , document.getElementById('react'))
