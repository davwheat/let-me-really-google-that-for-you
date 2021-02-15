module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: ['eslint:recommended', './rules/index.js', 'plugin:@typescript-eslint/recommended', 'prettier/@typescript-eslint', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'jsx-a11y'],
  rules: {
    'max-len': ['error', { code: 160 }],
    'linebreak-style': ['error', 'windows'],
    semi: ['error', 'never'],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['url'],
        aspects: ['noHref', 'invalidHref', 'preferButton'],
      },
    ],
    curly: ['error', 'multi-line', 'consistent'],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    // ESLint doesn't detect our TS prop validation
    // See: https://github.com/yannickcr/eslint-plugin-react/issues/2353
    'react/prop-types': 'off',
    '@typescript-eslint/ban-ts-comment': ['error', { 'ts-expect-error': 'allow-with-description' }],
    'no-unused-vars': 'off',
    'babel/new-cap': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    indent: 'off',
    'no-duplicate-imports': 'off',
    '@typescript-eslint/no-duplicate-imports': ['error'],
    'no-console': process.env.NODE_ENV === 'development' ? 'off' : ['error', { allow: ['error', 'warn', 'trace'] }],
  },
}
