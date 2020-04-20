module.exports = {
  "extends": [
    "wesbos"
  ],
  "rules": {
    "no-unused-vars": [
      1,
      {
        "ignoreSiblings": true,
        "argsIgnorePattern": "^_"
      }
    ],

    "prettier/prettier": [
      "error",
      {
        "trailingComma": "es5",
        "singleQuote": true,
        "printWidth": 120,
      }
    ],
  }
}