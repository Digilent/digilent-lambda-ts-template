module.exports = {
    entry: "./bundleHelper.js",
    output: {
        filename: "./bundle/<lambdaFunctionName>.js"
    },
    target: 'node'
}