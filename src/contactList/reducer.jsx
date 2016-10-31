function f<T>(state:Array<T> = [], action:{type:string, newContact?:T}) {
  switch(action.type) {
    case 'ADD_CONTACT':
      return newContact !== undefined ? [...state, newContact] : state
    default:
      return state
  }
}
export default f
