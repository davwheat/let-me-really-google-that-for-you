import React from 'react'
import PropTypes from 'prop-types'

import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'
import '../css/baseline.less'

import ErrorBoundary from './ErrorBoundary'
import { ThemeProvider } from '@material-ui/core'
import theme from '../theme'
import Footer from './Footer'

const Layout: React.FC = ({ children }) => {
  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <div>
          <main>{children}</main>
          <Footer />
        </div>
      </ThemeProvider>
    </ErrorBoundary>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
