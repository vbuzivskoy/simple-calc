module.exports = {
  plugins: [],
  env: {
    browser: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/recommended',
    'plugin:jest-dom/recommended',
    'plugin:testing-library/react',
    'plugin:react/recommended',
  ],
  rules: {
    'no-console': 0,
    'import/extensions': 0,
    'react/prop-types': 0,
    'testing-library/prefer-screen-queries': 'warn',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
      },
    },
  },
};
