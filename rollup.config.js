const BabelPlugin = require("rollup-plugin-babel");

module.exports = {
  input: "./src/index.js",
  output: {
    file: "./dist/bundle.js",
    format: "cjs"
  },
  plugins: [
    BabelPlugin({
      exclude: "node_modules/**"
    })
  ]
}