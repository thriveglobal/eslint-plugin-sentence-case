# eslint-plugin-sentence-case

Enforce that string literals are in sentence case, with exceptions for "Thrive" words.

## Installation + usage

`sentence-case` is included as part of [the Leafkit shared linter configuration](https://github.com/thriveglobal/thrive-web-leafkit/tree/staging/configs).

You can configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "sentence-case/rule-name": 2
    }
}
```

## Supported rules

-   [`sentence-case`](docs/rules/sentence-case.md)

## Word bank

Our excludelist of Thrive words was last updated Aug 2023 from this [document](https://docs.google.com/spreadsheets/d/1UNIgc6TgIP8RXpXzCkqiZugLJkXysebI/edit#gid=656893934).
