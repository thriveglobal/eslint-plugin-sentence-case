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
  ]
});
