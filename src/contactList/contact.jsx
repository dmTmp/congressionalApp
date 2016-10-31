// @flow
import crypto from 'crypto-browserify'
import React from 'react'

class Contact {
    name: string
    address: number
    picture: ?string
    constructor(name: string, address: number /*= window.crypto.getRandomValues(new Uint32Array(1))[0]*/) {
        this.name = name
        this.address = address
    }
    getAddress(): string /*hex*/ {
        return this.address
    }
}
export default Contact

function View(props:{profile:Contact}) {
  const pic = props.profile.picture
  return <div style={{/*float: 'right', */borderBottom: 'inset 4px black'}}>
    <h3>{props.profile.name}</h3>
    <img src={pic !== undefined ? pic : 'http://vignette4.wikia.nocookie.net/deusex/images/d/d4/JANUS1.png/revision/latest/scale-to-width-down/121?cb=20130607203345&path-prefix=en'}/>
    <p>{props.profile.getAddress()}</p>
    <button>send message</button>
  </div>
}
function ViewList(props:{contacts:Array<T>}) {
  return <div style={{width:'50%', float:'right'}}>{props
    .contacts
    .map(x => <View profile={x}/>)}</div>
}
export {ViewList as View}
