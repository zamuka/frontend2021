module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'linebreak-style': ['off'],
    'no-console': ['off'],
    'operator-assignment': ['error', 'never'],
    'prefer-object-spread': ['off'],
  },
};