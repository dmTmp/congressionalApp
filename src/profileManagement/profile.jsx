// @flow
const crypto = require(
  typeof(window) === 'undefined'
    ? 'crypto-browserify'
    : 'crypto'
)
//import crypto from 'crypto'

export class Profile {
    name: string
    address: string
    picture: ?string
    constructor(name: string, address: string) {
        this.name = name
        this.address = address
    }
    getAddress(): string /*hex*/ {
        return this.address
    }
}
export class User extends Profile {
    name: string
    rnd: number
    constructor(name: string, rnd: number = crypto.randomBytes(256).readInt32BE()) {
      super(name, '', '')
        this.name = name
        this.rnd = rnd
    }
    get key(): string /*hex*/ {
        const hash = crypto.createHash('sha256')
        hash.update(this.name + '\n' + this.rnd)
        return hash.digest('hex')
    }
    getAddress(): string /*hex*/ {
      const hash = crypto.createHash('sha256')
      hash.update(this.key)
      return hash.digest('hex')
    }
    encryptSymetric(message:string): string /*hex*/ {
        const cipher = crypto.createCipher('aes192', this.key);

        return cipher
            .update(message, 'utf8', 'hex')
            + cipher.final('hex')
    }
    decryptSymetric(message:string): string /*hex*/ {
        const decipher = crypto.createDecipher('aes192', this.key);

        return decipher
            .update(message, 'hex', 'utf8')
            + decipher.final('utf8');
    }
}
