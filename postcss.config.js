const {join} = require('path')

module.exports = {
    tailwindcss: {
        config: join(__dirname, 'tailwind.config.js')
    },
    autoprefixer: {}
}