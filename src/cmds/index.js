const { env } = require('./env')
const { requireModule } = require('./require-module')
const { readFile, writeFile } = require('./fs')
const { prompt } = require('./prompt')
const { cmds: universal } = require('effects-as-data-universal')

module.exports = {
  ...universal,
  env,
  requireModule,
  readFile,
  writeFile,
  prompt
}
