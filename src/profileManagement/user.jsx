// @flow
import crypto from 'crypto-browserify'

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
    get address(): string /*hex*/ {
      const hash = crypto.createHash('sha256')
      hash.update(this.getKey())
      return hash.digest('hex')
    }
    display() {
      return {...this, key:this.getKey(), address:this.getAddress()}
    }
    encrypt(message:string): string /*hex*/ {
        const cipher = crypto.createCipher('aes192', this.getKey());

        return cipher
            .update(message, 'utf8', 'hex')
            + cipher.final('hex')
    }
    decrypt(message:string): string /*hex*/ {
        const decipher = crypto.createDecipher('aes192', this.getKey());

        return decipher
            .update(message, 'hex', 'utf8')
            + decipher.final('utf8');
    }
}
export default User
