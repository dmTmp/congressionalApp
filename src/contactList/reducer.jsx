function f<T>(state:Array<T> = [], action:{type:string, newContact?:T} = {type:''}) {
  switch(action.type) {
    case 'ADD_CONTACT':
      return action.newContact !== undefined ? [...state, action.newContact] : state
    default:
      return state
  }
}
export default f
