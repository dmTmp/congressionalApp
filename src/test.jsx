var assert = require('assert')
import contact from './contactList/contact/state.jsx'
import {Profile as Contact, User} from './profileManagement/profile.jsx'
import profile, {replaceProfile} from './profileManagement/state.jsx'

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', () => {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});
describe('contact reducer', function() {
  it('defualt', () => {
    assert.equal(contact(undefined, {}), null)
  })
  it('new contact', () => {
    const c = new Contact('Person', '12')
    assert.equal(contact({}, {type:'CONTACT_ADD',newContact:c}).profile,c)
  })
})
describe('profile management', () => {

  it('intialize contact', () => {
    const person = new User('Person')
    assert.equal(person, profile(undefined, replaceProfile(person)))
  })
})
