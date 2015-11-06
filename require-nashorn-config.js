/*
 * RequireJS configuration for Nashorn.
 */
requirejs.config({
    baseUrl: "./lib",
    paths: {
        "jscc/io/io": "jscc/io/ioNashorn",
        "jscc/log/log": "jscc/log/logJava",
        "jscc/bitset": "jscc/bitset/BitSet32"
    },
    nodeRequire: require,
    config: {
        "jscc/global": {
            "version": "0.38.0",
            "defaultDriver": "./src/driver/parser.js"
        }
    }
});
