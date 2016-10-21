// @flow
import crypto from 'crypto'

class User {
    name: string
    rnd: number
    constructor(name: string, rnd: number) {
        this.name = name
        this.rnd = rnd
    }
    getKey(): string /*hex*/ {
        const hash = crypto.createHash('sha256')
        hash.update(this.name + '\n' + this.rnd)
        return hash.digest('hex')
    }
    getAddress() {
        const hash = crypto.createHash('sha256')
        hash.update(this.getKey())
        return hash.digest('hex')
    }
}
export default User


function reducer(state:?User = null, action:{type:string, payload:?User}) {
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