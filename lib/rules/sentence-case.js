const checkString = (context) => (node) => {
    const { value } = node
    if (typeof value !== 'string') return

    const lowerToUpperCount = (value.match(/\p{Ll}\s\p{Lu}/gu) || []).length
    const anyToLowerCount = (value.match(/\p{LC}\s\p{Ll}/gu) || []).length

    if (lowerToUpperCount > anyToLowerCount) {
        context.report(node, 'String literals should not use title case')
    }
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
            Literal: checkString(context),
            JSXText: checkString(context)
        }
    }
}
