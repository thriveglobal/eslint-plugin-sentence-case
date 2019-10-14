/**
 * @fileoverview Enforce that string literals are in sentence case.
 * @author Cassidy Laidlaw
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/sentence-case"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("sentence-case", rule, {

    valid: [

        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "'A Title Case Literal'",
            errors: [{
                message: "Fill me in.",
                type: "Me too"
            }]
        }
    ]
});
