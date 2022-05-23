const { describe, it } = require('mocha')
const { expect } = require('chai')
const nimble = require('./env/nimble')
const { PrivateKey } = nimble

describe('classes', () => {
  require('./classes/address')
  require('./classes/buffer-reader')
  require('./classes/buffer-writer')
  require('./classes/private-key')
  require('./classes/public-key')
  require('./classes/script')
  require('./classes/transaction')
})

describe('functions', () => {
  require('./functions/are-buffers-equal')
  require('./functions/calculate-dust')
  require('./functions/calculate-public-key')
  require('./functions/calculate-txid')
  require('./functions/create-p2pkh-lock-script')
  require('./functions/create-p2pkh-unlock-script')
  require('./functions/decode-address')
  require('./functions/decode-asm')
  require('./functions/decode-base64')
  require('./functions/decode-der')
  require('./functions/decode-hex')
  require('./functions/decode-public-key')
  require('./functions/decode-script-chunks')
  require('./functions/decode-tx')
  require('./functions/decode-wif')
  require('./functions/ecdsa-sign')
  require('./functions/ecdsa-sign-with-k')
  require('./functions/ecdsa-verify')
  require('./functions/encode-address')
  require('./functions/encode-asm')
  require('./functions/encode-der')
  require('./functions/encode-hex')
  require('./functions/encode-public-key')
  require('./functions/encode-push-data')
  require('./functions/encode-tx')
  require('./functions/encode-wif')
  require('./functions/eval-script')
  require('./functions/generate-private-key')
  require('./functions/generate-random-data')
  require('./functions/generate-tx-signature')
  require('./functions/is-buffer')
  require('./functions/preimage-async')
  require('./functions/preimage')
  require('./functions/read-u32-le')
  require('./functions/read-u64-le')
  require('./functions/read-varint')
  require('./functions/ripemd160-async')
  require('./functions/ripemd160')
  require('./functions/sha1-async')
  require('./functions/sha1')
  require('./functions/sha256-async')
  require('./functions/sha256')
  require('./functions/sha256d')
  require('./functions/sighash-async')
  require('./functions/sighash')
  require('./functions/verify-point')
  require('./functions/verify-private-key')
  require('./functions/verify-tx-signature')
  require('./functions/verify-tx')
  require('./functions/verify-script-async')
  require('./functions/verify-script')
  require('./functions/write-u32-le')
  require('./functions/write-u64-le')
  require('./functions/write-push-data')
  require('./functions/write-varint')
})

describe('nimble', () => {
  describe('testnet', () => {
    it('enabled', () => {
      nimble.testnet = true
      expect(PrivateKey.fromRandom().testnet).to.equal(true)
      expect(PrivateKey.fromRandom().toPublicKey().testnet).to.equal(true)
      expect(PrivateKey.fromRandom().toAddress().testnet).to.equal(true)
    })

    it('disabled', () => {
      nimble.testnet = false
      expect(PrivateKey.fromRandom().testnet).to.equal(false)
      expect(PrivateKey.fromRandom().toPublicKey().testnet).to.equal(false)
      expect(PrivateKey.fromRandom().toAddress().testnet).to.equal(false)
    })
  })
})
