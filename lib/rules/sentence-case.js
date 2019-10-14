/**
 * @fileoverview Enforce that string literals are in sentence case.
 * @author Cassidy Laidlaw
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: "Enforce that string literals are in sentence case.",
      recommended: false
    },
    fixable: null,  // or "code" or "whitespace"
    schema: [
      // fill in your schema
    ]
  },

  create: function(context) {
    return {
      Literal: (node) => {
        if (typeof node.value === 'string') {
          const allButFirst = node.value.substring(1);
          if (allButFirst.toLowerCase() !== allButFirst) {
            context.report(node, 'String literals should not use title case');
          }
        }
      },
    };
  }
};
