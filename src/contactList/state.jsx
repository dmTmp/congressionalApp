// @flow
import contact, {addContact as initContact, removeContact} from './contact/state.jsx'
export default function <T>(state:Array<T> = [], action:{type:string, newContact?:T} = {type:''}):Array<T> {
  switch(action.type) {
    case 'ADD_CONTACT':
      return action.newContact !== undefined ? [...state, contact(undefined, initContact(action.newContact))] : state
    default:
      return state
  }
}
export const addContact = function(newContact) {
    return {type:'ADD_CONTACT', newContact:newContact}
}