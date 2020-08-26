const babel = require('rollup-plugin-babel')
const babelrc = require('@pectin/babelrc')
const pkg = require('./package.json')

module.exports = {
    plugins: [
        babel(babelrc(pkg))
    ]
}
