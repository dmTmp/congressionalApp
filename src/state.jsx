// @flow
import { combineReducers } from 'redux'
import { reducer as user } from './profileManagement/view.jsx'

function windowVars(state = {edit:true, saved:false}, action: {type: string, what?: string} = {type:'', what:''}) {
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
            case 'saved':
                return {
                    ...state,
                    saved: !state.saved
                }

        }
       } else {
        return state
    }
  /*switch (action.type) {
    case :
      
    default:
      return state
  }*/
}

export default combineReducers({
  windowVars,
  user
})
