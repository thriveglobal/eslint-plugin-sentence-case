const sentenceCaseRules = require('./rules/sentence-case')

module.exports = {
    extends: ['plugin:jsx-a11y/strict', sentenceCaseRules],
    plugins: ['formatjs'],
    rules: {
        // formatjs
        'formatjs/enforce-description': ['error'],
        'formatjs/enforce-default-message': ['error']
    }
}
