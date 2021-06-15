/**
 * @fileoverview Prevent using double not to convert a value to boolean
 * @author sofen hoque anonta
 */
"use strict";

var rule = require("../../../lib/rules/no-not-not"),

RuleTester = require("eslint").RuleTester;

var ruleTester = new RuleTester();

const expectedErrorMessage = "Double not operators not allowed";
const expectedNodeType = "UnaryExpression";
const defaultError = {
    message: expectedErrorMessage,
    type: expectedNodeType,
};

ruleTester.run("no-not-not", rule, {

    valid: [
        "var x = Boolean(x % 2);",
        "var x = !p;",
        "var x = !a || !b;",
        "var x = -a;",
        "var x = --a;",
        "var x = a--;",
        "var x = +a;",
        "var x = ++a;",
        "var x = a++;",
        "var x = ~a;",
        "var x = ~~a;",
        "var x = '!!a';",
        'var x = "!!a";',
        "var x = a != b;",
        "var x = a !== b;",
    ],

    invalid: [
        {
            code: "var xIsOdd = !!p;",
            output: "var xIsOdd = Boolean(p);",
            errors: [defaultError],
        },
        {
            code: "var xIsOdd = !!(x % 2);",
            output: "var xIsOdd = Boolean(x % 2);",
            errors: [defaultError],
        },
        {
            code: "var x = !(!p);",
            output: "var x = Boolean(p);",
            errors: [defaultError]
        },
        {
            code: "var x = (!!a || b);",
            output: "var x = (Boolean(a) || b);",
            errors: [defaultError]
        },
        {
            code: "var x = !!a || !!b;",
            output: "var x = Boolean(a) || Boolean(b);",
            errors: [defaultError, defaultError]
        },
        {
            code: "var x = (!!a || !!b && !!c);",
            output: "var x = (Boolean(a) || Boolean(b) && Boolean(c));",
            errors: [defaultError, defaultError, defaultError]
        },
    ]
});
