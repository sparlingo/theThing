module.exports = {
  presets: [
    process.env.BABEL_ENV === 'node' ? '@babel/preset-env' : '@vue/app'
  ]
}