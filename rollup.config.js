const BabelPlugin = require("rollup-plugin-babel");

module.exports = {
  input: "./src/index.js",
  output: [
    {
      file: "./dist/common.cjs.js",
      format: "cjs"
    },
    {
      file: "./dist/common.es.js",
      format: "es"
    }    
  ],
  plugins: [
    BabelPlugin({
      exclude: "node_modules/**"
    })
  ]
}