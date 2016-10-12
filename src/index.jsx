// @flow
import React from 'react'
import ReactDOM from 'react-dom'
import z from './flow/app.jsx'

console.log('from index1', document.getElementById('react'))
ReactDOM.render(<p>test {z}</p>, document.getElementById('react'))
