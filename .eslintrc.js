module.exports = {
    parser: "@typescript-eslint/parser",
    extends: ["plugin:@typescript-eslint/recommended", "plugin:prettier/recommended", "plugin:react/recommended"],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        "@typescript-eslint/explicit-function-return-type": "off",
        "react/prop-types": 0,
        "@typescript-eslint/no-inferrable-types": "off",
        "@typescript-eslint/no-explicit-any": "off",
    },
    settings: {
        react: {
            version: "detect",
        },
    },
}
