const { env } = require('./env')
const { requireModule } = require('./require-module')
const { node } = require('./node')
const { prompt } = require('./prompt')
const { handlers: universal } = require('effects-as-data-universal')

module.exports = {
  ...universal,
  env,
  requireModule,
  node,
  prompt
}
