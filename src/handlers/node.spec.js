const cmds = require('../cmds')
const { node } = require('./node')
const { deepEqual } = require('assert')
const { join } = require('path')
const fs = require('fs')
const { tmpdir } = require('os')

describe.skip('node.js', () => {
  describe('fs.readFile()', () => {
    it('should read from a file', () => {
      const filePath = join(__dirname, 'test-file.js')
      const action = cmds.readFile(filePath, { encoding: 'utf8' })
      const fileContents = fs.readFileSync(filePath, { encoding: 'utf8' })
      const expected = success(fileContents)
      expected.args = [fileContents]
      return node(action).then(actual => {
        deepEqual(actual, expected)
      })
    })
  })

  describe('fs.writeFile()', () => {
    it('should write to a file', () => {
      const filePath = join(tmpdir(), 'write-file-test.txt')
      //  wipe out file contents from previous run of test
      fs.writeFileSync(filePath, '', { encoding: 'utf8' })
      const action = cmds.writeFile(filePath, 'foobar', { encoding: 'utf8' })
      const expected = success()
      expected.args = []
      return node(action).then(actual => {
        deepEqual(actual, expected)
        const contents = fs.readFileSync(filePath, { encoding: 'utf8' })
        deepEqual(contents, 'foobar')
      })
    })
  })
})
