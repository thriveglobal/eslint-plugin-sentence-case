const phraseBank = new Set([
    'Action Plan',
    'Apple Health',
    'Nourish to Thrive',
    'Thriving at Work',
    'Thriving in Uncertain Times',
    'Thriving Performance',
    'Thriving Relationships',
    'Always You',
    'Articles',
    'Behavior change',
    'Best Streak',
    'Building Resilience and Belonging',
    'Challenge',
    'Compassionate Directness',
    'Connect',
    'Courses',
    'Current Streak',
    'Days active',
    'Expert Wisdom',
    'Focus',
    'Food',
    'Guide',
    'Google Fit',
    'Hello Sunshine',
    'Health',
    'Integrations',
    'Journey',
    'Leadership',
    'Leadership Journey',
    'Learn',
    'Lessons',
    'Microsteps',
    'Mindset',
    'Mom Tribe',
    'Money',
    'Move',
    'My Fitness Pal',
    'Nourish Your Body and Mind',
    'Onward',
    'Onward. Upward. Inward',
    'Peer Inspiration',
    'Pulse',
    'Recharge',
    'Reset',
    'Role Models',
    'Streak',
    'The Great Re-evaluation',
    'Thrive for Call Centers',
    'Thrive for Chat',
    'Thrive for Conference',
    'Thrive for Mobile',
    'Thrive for Web',
    'Thrive Foundation',
    'Thrive Time',
    'Thriving Across Our Differences',
    'Thriving Connection',
    'Thriving Families',
    'Thriving in Distracted Times',
    'Thriving Kids',
    'Thriving Mind',
    'Thriving Onboarding',
    'Thriving Parenthood',
    'Thriving Together',
    'Today',
    'Under Armour',
    'A Moment to Yourself',
    'Pulse Check',
    'Daily Check-In',
    'Terraprima',
    'Lumiversa',
    'Gloriflora',
    'Resiliflora',
    'Nutrivora',
    'Common',
    'Rare',
    'Epic',
    'Legendary'
])

function excludePhrasesFromWordBank(str, phraseBank) {
    const regex = new RegExp(
        Array.from(phraseBank)
            .map((phrase) => `\\b${phrase}\\b`)
            .join('|'),
        'gi'
    )
    const filteredStr = str.replace(regex, (match) => {
        return phraseBank.has(match) ? ' ' : ''
    })
    return filteredStr
}

function excludeQuotedPhrases(str) {
    const regex = /(['"])(?:\\\1|.)*?\1/g; // matches phrases in single or double quotes
    return str.replace(regex, ' ')
}

function filterValue(str) {
    const filteredStr = excludeQuotedPhrases(str)
    return excludePhrasesFromWordBank(filteredStr, phraseBank)
}

const checkString = (context) => (node) => {
    const { value } = node
    if (typeof value !== 'string') return
    const filteredValue = filterValue(value)

    const lowerToUpperCount = (filteredValue.match(/\p{Ll}\s\p{Lu}/gu) || [])
        .length
    const anyToLowerCount = (filteredValue.match(/\p{LC}\s\p{Ll}/gu) || [])
        .length

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
