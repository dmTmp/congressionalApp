// @flow
import {Profile as Contact} from '../../profileManagement/profile.jsx'

type State = {profile:Contact, messageBox:boolean, messageText:string}
export default function(state:State | {} = {}, action) {
    switch(action.type) {
        case 'CONTACT_ADD':
            return {
                ...state,
                profile:action.newContact,
                messageBox: false,
                messageText: ''
            }
        case 'CONTACT_REMOVE':
            return {}
        default:
            return state
    }
}
export const addContact = function(newContact) {
    return {type:'CONTACT_ADD', newContact:newContact}
}
export const removeContact = function() {
    return {type:'CONTACT_REMOVE'}
}
