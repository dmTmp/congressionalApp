// @flow
import {Profile as Contact} from '../../profileManagement/profile.jsx'

export type State = {profile:Contact, messageBox:boolean, messageText:string}
export default function(state:?State = null, action: AddContact | RemoveContact):?State {
    switch(action.type) {
        case 'CONTACT_ADD':
            return {
                profile:action.newContact,
                messageBox: false,
                messageText: ''
            }
        case 'CONTACT_REMOVE':
            return null
        default:
            return state
    }
}
type AddContact = {type:'CONTACT_ADD', newContact:Contact}
export const addContact = function(newContact:Contact):AddContact {
    return {type:'CONTACT_ADD', newContact:newContact}
}
type RemoveContact = {type:'CONTACT_REMOVE'}
export const removeContact = function():RemoveContact {
    return {type:'CONTACT_REMOVE'}
}
