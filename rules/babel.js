/* MIT License

Copyright (c) 2017 Chienyi Cheri Hung

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE. */

module.exports = {
  parser: '@babel/eslint-parser',
  env: {
    es6: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2021,
    requireConfigFile: false,
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
  },
  plugins: ['babel'],
  rules: {
    // babel plugin
    'babel/object-curly-spacing': ['error', 'always', { objectsInObjects: false }],
    'babel/new-cap': [
      'error',
      {
        newIsCap: true,
        capIsNew: true,
        capIsNewExceptions: ['Immutable', 'Arc'],
      },
    ],
    'babel/flow-object-type': 'off',
    'babel/no-invalid-this': 'off',
    'babel/semi': 'off',
  },
}
