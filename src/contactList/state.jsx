// @flow
export default function <T>(state:Array<T> = [], action:{type:string, newContact?:T} = {type:''}):Array<T> {
  switch(action.type) {
    case 'ADD_CONTACT':
      return action.newContact !== undefined ? [...state, action.newContact] : state
    default:
      return state
  }
}
