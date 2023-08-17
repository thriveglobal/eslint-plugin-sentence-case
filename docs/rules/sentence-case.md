# Enforce that string literals are in sentence case (sentence-case)

## Rule Details

Examples of **incorrect** code for this rule:

```js
'A String in Title Case'
```

Examples of **correct** code for this rule:

```js
'A string in sentence case'
'lowercase-string'
```

## Options

This rule accepts a configuration object with one option:

-   `"phraseBank"`: An array of strings that are allowed to be in non-sentence case. Defaults to `[]`.

### phraseBank

Examples of correct code for the `{ "phraseBank": ["Calls"] }` option:

```js
{
    /* eslint @thriveglobal/sentence-case/sentence-case: ["warn", { "phraseBank": ["Calls"] }] */
    const message = 'Thrive Calls'
}
```
