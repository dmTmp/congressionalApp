﻿// @flow
import React from 'react'
import { Container as Profile } from './profileManagement/view.jsx'
import View, {Container} from './contactList/view.jsx'
import {Profile as Contact} from './profileManagement/profile.jsx'
//<View contacts={[new Contact('Jane', '3498t53498gu89fug98f7896f'), new Contact('Jack', 'ljj8te349wlu8rdug98fr896f'), new Contact('Jim', 'ljj8te349wlu8rdug98fr896f')]}/>
export default (props:{}) => <div>
    <Profile/>
    <Container/>
</div>
