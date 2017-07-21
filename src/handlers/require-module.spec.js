const cmds = require('../cmds')
const { requireModule } = require('./require-module')
const { join } = require('path')
const { deepEqual } = require('assert')

describe('require-module.js', () => {
  describe('requireModule()', () => {
    it('should return the module', () => {
      const expected = {
        foo: 'bar'
      }

      const action = cmds.requireModule(join(__dirname, './test-module.js'))
      const actual = requireModule(action)

      deepEqual(actual, expected)
    })
  })
})
