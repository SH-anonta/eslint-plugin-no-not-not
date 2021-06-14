# eslint-plugin-no-not-not

Don&#39;t allow using double not operator for converting a value to boolean.
E.g. `let isXZero = !!x;`. The double not operator is not very good in terms of readability. The suggested way to is to use the boolean constructor E.g. `let isXZero = Boolean(x);`  

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-no-not-not`:

```
$ npm install eslint-plugin-no-not-not --save-dev
```


## Usage

Add `no-not-not` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "no-not-not"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "no-not-not/rule-name": 2
    }
}
```

## Supported Rules

* [no-not-not](/docs/rules/no-not-not.md)





