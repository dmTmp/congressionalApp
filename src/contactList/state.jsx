// @flow
import contact, {addContact as initContact, removeContact} from './contact/state.jsx'
export default function <T>(state:Array<T> = [], action:{type:string, newContact?:T} = {type:''}):Array<T> {
  switch(action.type) {
    case 'CONTACT_ADD':
      return action.newContact !== undefined ? [...state, contact(undefined, initContact(action.newContact))] : state
    default:
      return state
  }
}
export const addContact = function(newContact) {
    return {type:'CONTACT_ADD', newContact:newContact}
}
