module.exports = {
    mode: 'development',
    entry: './public/js/main.js',
    output: {
        filename: 'bundle.js'
    },
    watch: true,
    watchOptions: {
        aggregateTimeout: 100
    }
}
