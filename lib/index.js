const rules = require('./rules/sentence-case')

module.exports = {
    rules,
    extends: ['plugin:jsx-a11y/strict'],
    plugins: ['formatjs'],
    rules: {
        // formatjs
        'formatjs/enforce-description': ['error'],
        'formatjs/enforce-default-message': ['error']
    }
}
