/* eslint-disable */

const __IS_DEV__ = process.env.NODE_ENV !== 'production'

// These plugins will only be used in production builds
const prodPlugins = !__IS_DEV__
  ? [
      {
        resolve: 'gatsby-plugin-remove-console',
        options: {
          exclude: ['error', 'warn'],
        },
      },
    ]
  : []

module.exports = {
  flags: {
    FAST_DEV: true,
    FAST_REFRESH: true,
  },
  siteMetadata: {},
  plugins: [
    ...prodPlugins,
    `gatsby-plugin-preact`,
    `gatsby-plugin-react-head`,
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.(j|t)sx?$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop', 'build-javascript'],
        options: {
          emitWarning: true,
          failOnError: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Let me really Google that for you`,
        short_name: `LMRGTFY`,
        start_url: `/`,
        background_color: `#E04303`,
        theme_color: `#E04303`,
        display: `minimal-ui`,
        icon: `src/assets/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-less`,
    `gatsby-plugin-preload-fonts`,
    `gatsby-plugin-webpack-bundle-analyser-v2`,
    `gatsby-plugin-webpack-size`,
    `gatsby-plugin-material-ui`,
  ],
}
