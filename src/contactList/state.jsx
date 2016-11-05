// @flow
import {Profile as Contact} from '../profileManagement/profile.jsx'
import contact, {addContact as initContact} from './contact/state.jsx'
import type {State} from './contact/state.jsx'

export default function (state:Array<State> = [], action:AddContact):Array<State> {
  switch(action.type) {
    case 'CONTACT_ADD':
      const newContact = contact(undefined, initContact(action.newContact))
      return newContact == null
        ? state
        : [...state, newContact]
    default:
      return state
  }
}
type AddContact = {type:string, newContact:Contact}
export const addContact = function(newContact:Contact):AddContact {
    return {type:'CONTACT_ADD', newContact:newContact}
}
