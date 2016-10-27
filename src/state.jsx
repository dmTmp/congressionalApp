import { combineReducers } from 'redux'
import { reducer as user } from './profileManagement/view.jsx'

function windowVars(state = {edit:true}, action: {type: string} = {type:''}) {
  switch (action.type) {
    case 'TOGGLE':
      return {
        edit: !state.edit
      }
    default:
      return state
  }
}

export default combineReducers({
  windowVars,
  user
})
