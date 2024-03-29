module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    extends: [
        '@nuxtjs/eslint-config-typescript',
        'plugin:nuxt/recommended',
        'prettier'
    ],
    plugins: [
    ],
    // add your custom rules here
    "rules": {
        "no-useless-escape": "off",
        "no-console": "off",
        "no-unused-vars": "off",
        "semi": [2, "always"],
        "indent": ["error", 4],
        "camelcase": "off",
        "no-async-promise-executor": "off",
        "vue/html-indent": ["error", 4],
        "vue/no-v-html": 0,
        "vue/max-attributes-per-line": ["error"],
        "vue/no-unused-components": "off",
        "vue/attributes-order": ["error"],
        "vue/singleline-html-element-content-newline": ["error"],
        "@typescript-eslint/no-useless-escape": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/restrict-plus-operands": "off",
        "@typescript-eslint/ban-ts-ignore": "off",
        "@typescript-eslint/no-inferrable-types": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-async-promise-executor": "off",
        "@typescript-eslint/indent": ["error", 4, {
            "FunctionDeclaration": { "parameters": "first" },
            "FunctionExpression": { "parameters": "first" }
        }],
        "@typescript-eslint/no-use-before-define": ["error", {
            "variables": true,
            "functions": true
        }],
        "@typescript-eslint/camelcase": "off",
        "object-curly-spacing": [ "error", "always" ],
        "block-spacing": [ "error", "always" ],
        "space-in-parens": [ "error", "always" ],
        "space-infix-ops": [ "error", { "int32Hint": true } ],
        "no-undef": "off"
    }
};
