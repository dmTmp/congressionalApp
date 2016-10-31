// @flow
import React from 'react'
import ReactDOM from 'react-dom'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import state, { initalize } from './state.jsx'
import App from './app.jsx'

const store = createStore(state)
initalize(store)

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
  , document.getElementById('react'))