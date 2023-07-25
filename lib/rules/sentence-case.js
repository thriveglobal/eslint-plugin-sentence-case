// import { wordBankArr } from '../utils/wordbank'

const checkString = (context) => (node) => {
    const { value } = node
    if (typeof value !== 'string') return
    // needs to exclude wordbank
    const lowerToUpperCount = (value.match(/\p{Ll}\s\p{Lu}/gu) || []).length
    const anyToLowerCount = (value.match(/\p{L}\s\p{Ll}/gu) || []).length

    if (lowerToUpperCount > anyToLowerCount) {
        context.report(node, 'String literals should not use title case')
    }
}

// it might be simpler to check there's any other words in the string that start with a capital letter instead
// and if the words are not in the wordbank, then it's wrong
const checkWordbank = (context) => (node) => {
    const { value } = node
    if (typeof value !== 'string') return

    // it's a legit word if
    // if (wordBankArr.includes(value)) {
    //     context.report(node, 'This word is in the bank')
    // }
}

module.exports = {
    meta: {
        docs: {
            description: 'Enforce that string literals are in sentence case.',
            recommended: false
        }
    },
    create: function (context) {
        return {
            Literal: checkWordbank(context),
            JSXText: checkWordbank(context)
        }
    }
}
