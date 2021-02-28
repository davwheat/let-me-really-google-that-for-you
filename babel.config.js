/**
 * This Babel config is used by Jest for tests.
 */

module.exports = api => {
  if (api.env('test')) {
    return {
      plugins: [['@babel/plugin-proposal-decorators', { legacy: true }]],
      presets: [
        [
          '@babel/preset-env',
          {
            targets: { node: 'current' },
          },
        ],
        '@babel/preset-react',
        '@babel/preset-typescript',
      ],
    }
  }

  return {
    plugins: [['@babel/plugin-proposal-decorators', { legacy: true }]],
    presets: [
      [
        'babel-plugin-jsx-remove-data-test-id',
        'babel-preset-gatsby',
        {
          targets: {
            browsers: ['>0.25%', 'not dead'],
          },
        },
      ],
    ],
  }
}
