import assert from 'assert'
import contact from './contactList/contact/state.jsx'
import {Profile as Contact, User} from './profileManagement/profile.jsx'
import profileTest from './profileManagement/test.jsx'

describe('contact reducer', function() {
  it('defualt', () => {
    assert.equal(contact(undefined, {}), null)
  })
  it('new contact', () => {
    const c = new Contact('Person', '12')
    assert.equal(contact({}, {type:'CONTACT_ADD',newContact:c}).profile,c)
  })
})
profileTest()
