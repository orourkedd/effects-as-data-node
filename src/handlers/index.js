const { merge } = require('ramda')
const { env } = require('./env')
const { requireModule } = require('./require-module')
const { node } = require('./node')
const { prompt } = require('./prompt')
const { handlers: universal } = require('effects-as-data-universal')

module.exports = merge(universal, {
  env,
  requireModule,
  node,
  prompt
})
