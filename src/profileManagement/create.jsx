// @flow
import crypto from 'crypto'

class User {
    name: string
    rnd: number
    constructor(name: string, rnd: number = window.crypto.getRandomValues(new Uint32Array(1))[0]) {
        this.name = name
        this.rnd = rnd
    }
    getKey(): string /*hex*/ {
        const hash = crypto.createHash('sha256')
        hash.update(this.name + '\n' + this.rnd)
        return hash.digest('hex')
    }
    getAddress(): string /*hex*/ {
        const hash = crypto.createHash('sha256')
        hash.update(this.getKey())
        return hash.digest('hex')
    }
}
export default User


function reducer(state:?User = null, action:{type:string, payload:?User}):?User {
    if (state == null) return action.payload
    switch(action.type) {
        case 'DELETE':
            return null;
        case 'REPLACE':
            return action.payload
        default:
            return state
    }
}

export {reducer}
