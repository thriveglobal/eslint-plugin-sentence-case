/**
 * @fileoverview Enforce that string literals are in sentence case.
 * @author Cassidy Laidlaw
 */
"use strict";

var rule = require("../../../lib/rules/sentence-case"),
  RuleTester = require("eslint").RuleTester;

RuleTester.setDefaultConfig({
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
    },
  }
});

var ruleTester = new RuleTester();
ruleTester.run("sentence-case", rule, {

  valid: [
    {
      code: "'A sentence case literal'",
    },
    {
      code: "'lowercase-string'",
    },
    {
      code: "<Text>A sentence case string</Text>",
    },
    {
      code: "<TextInput placeholder=\"A sentence case prop\" />",
    },
    {
      code: "'ALL UPPERCASE'",
    },
    {
      code: "'snake_case'",
    },
    {
      code: ""'lowerCamelCase'",
    },
    {
      code: "authState === 'signedIn';",
    },
    {
      code: "'UpperCamelCase'",
    },
    {
      code: "'This sentence has a proper noun and it is New York City.'",
    },
    {
      code: "'One sentence. Two sentence. Three sentence.'",
    },
  ],

  invalid: [
    {
      code: "'A Title Case Literal'",
      errors: [{}],
    },
    {
      code: "<TextInput placeholder=\"a Title Case Prop\" />",
      errors: [{}],
    },
    {
      code: "<Text>A Title Case String</Text>",
      errors: [{}],
    },
    {
      code: "'Title Case and a Couple Lowercase Words'",
      errors: [{}],
    }
  ]
});
