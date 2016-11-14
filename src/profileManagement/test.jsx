import reducer, {ReplaceProfile} from './state.jsx'
import assert from 'assert'
import {User} from './profile.jsx'
import profile, {replaceProfile, updateProfile, deleteProfile} from './state.jsx'

export default () => {
  describe('profile management', () => {
    it('intialize contact', () => {
      const person = new User('Person')
      assert.equal(person, profile(undefined, replaceProfile(person)))
    }),
    describe('change name', () => {
      const person = new User('Person')
      const newName = 'new name'
      const newPerson = profile(person, updateProfile(newName))
      it('name', () => {assert.equal(newPerson.name, newName)})
      it('rnd', () => {assert.equal(person.rnd, newPerson.rnd)})
      it('picture', () => {assert.equal(person.picture, person.picture)})
    })
  })
}
