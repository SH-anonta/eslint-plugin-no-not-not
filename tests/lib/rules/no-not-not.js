/**
 * @fileoverview Prevent using double not to convert a value to boolean
 * @author sofen hoque anonta
 */
"use strict";

var rule = require("../../../lib/rules/no-not-not"),

RuleTester = require("eslint").RuleTester;

var ruleTester = new RuleTester();
ruleTester.run("no-not-not", rule, {

    valid: [

        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "var xIsOdd = !!(x % 2);",
            errors: [{
                message: "Double not operators not allowed",
                type: "UnaryExpression"
            }]
        }
    ]
});
