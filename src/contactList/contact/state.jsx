// @flow
import {Profile as Contact} from '../../profileManagement/profile.jsx'

type State = {profile:Contact, messageBox:boolean, messageText:string}
export default function(state:State | {} = {}, action) {
    switch(action.type) {
        case 'ADD_CONTACT':
            return {
                ...state,
                profile:action.newContact,
                messageBox: false,
                messageText: ''
            }
        case 'REMOVE_CONTACT':
            return {}
        default:
            return state
    }
}
export const addContact = function(newContact) {
    return {type:'ADD_CONTACT', newContact:newContact}
}
export const removeContact = function() {
    return {type:'REMOVE_CONTACT'}
}