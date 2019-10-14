# eslint-plugin-sentence-case

Enforce that string literals are in sentence case.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-sentence-case`:

```
$ npm install eslint-plugin-sentence-case --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-sentence-case` globally.

## Usage

Add `sentence-case` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "sentence-case"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "sentence-case/rule-name": 2
    }
}
```

## Supported Rules

* [`sentence-case`](docs/rules/sentence-case.md)
