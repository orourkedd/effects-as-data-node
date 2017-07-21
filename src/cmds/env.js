/**
 * Create an `env` action.  `yield` an env action get `process.env`.
 * @returns {Object} an action of type `env`.
 * @example //  Test It
 * const { testIt } = require('effects-as-data/test')
 * const { cmds } = require('effects-as-data/node')
 * const testExample = testIt(example)
 *
 * describe('example()', () => {
 *   it('should return the environment', testExample(() => {
 *     return [
 *       [null, cmds.env()],
 *       [{ NODE_ENV: 'development' }, success({ NODE_ENV: 'development' })]
 *     ]
 *   }))
 * })
 *
 * @example //  Write It
 * const { cmds } = require('effects-as-data/node')
 *
 * function * example () {
 *   const result = yield cmds.env()
 *   return result
 * }
 *
 * @example //  Run It
 * const { handlers, run } = require('effects-as-data/node')
 *
 * run(handlers, example).then((env) => {
 *   env.payload.NODE_ENV === 'development' //  true, if process.env.NODE_ENV === 'development'
 * })
 */
function env() {
  return {
    type: 'env',
  }
}

module.exports = {
  env,
}
