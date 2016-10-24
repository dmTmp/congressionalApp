// @flow
import crypto from 'crypto'

export default class {
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
    display() {
      return {...this, key:this.getKey(), address:this.getAddress()}
    }
}
