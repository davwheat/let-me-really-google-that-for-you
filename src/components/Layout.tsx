import React from 'react'
import PropTypes from 'prop-types'

import ErrorBoundary from './ErrorBoundary'
import { ThemeProvider } from '@material-ui/core'
import theme from '../theme'
import Footer from './Footer'

const Layout: React.FC = ({ children }) => {
  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <main>{children}</main>
        <Footer />
      </ThemeProvider>
    </ErrorBoundary>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
