function node(action) {
  const m = require(action.module)
  const fn = m[action.function]
  return promisify(fn, m).apply(null, action.args)
}

function promisify(fn, ctx) {
  return function() {
    let args = [].slice.call(arguments)
    return new Promise((resolve, reject) => {
      let done = function() {
        let doneArgs = [].slice.call(arguments)
        let error = doneArgs.shift()

        if (error) return reject(error)

        resolve(doneArgs[0], { args: doneArgs })
      }

      args.push(done)
      fn.apply(ctx, args)
    })
  }
}

module.exports = {
  node
}
