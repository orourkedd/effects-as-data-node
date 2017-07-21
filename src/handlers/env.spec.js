const cmds = require('../cmds')
const { env } = require('./env')
const { deepEqual } = require('assert')

describe('env.js', () => {
  describe('env()', () => {
    it('should return process.env', () => {
      const action = cmds.env()
      const expected = process.env
      const actual = env(action)
      deepEqual(actual, expected)
    })
  })
})
