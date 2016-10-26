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

export const combined = combineReducers({
  windowVars,
  user
})
