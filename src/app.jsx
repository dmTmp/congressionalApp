// @flow
import React from 'react'
import { Container as Profile } from './profileManagement/view.jsx'
import Contact, {View} from './contactList/contact.jsx'

const x = g => JSON.stringify({...g, address1:g.getAddress()})
export default props => <div>
    <Profile/>
    <View contacts={[new Contact('Jane', '3498t53498gu89fug98f7896f'), new Contact('Jack', 'ljj8te349wlu8rdug98fr896f')]}/>
</div>
