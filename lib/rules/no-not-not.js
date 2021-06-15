/**
 * @fileoverview Prevent using double not to convert a value to boolean
 * @author sofen hoque anonta
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Prevent using double not to convert a value to boolean",
            category: "Fill me in",
            recommended: false
        },
        fixable: "code",
        schema: []
    },

    create: function(context) {
        return {
            'UnaryExpression[prefix=true] > UnaryExpression[prefix=true]': (node) => {

                if (node.operator === '!' && node.parent.operator === '!') {
                    context.report({
                        node,
                        message: 'Double not operators not allowed',
                        fix: function(fixer) {
                            const sourceCode = context.getSourceCode();
                            return fixer.replaceTextRange([node.parent.range[0], node.parent.range[1]], `Boolean(${sourceCode.getText(node.argument)})`);
                        }
                    });
                }
            }
        };
    }
};
