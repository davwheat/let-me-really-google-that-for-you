import React from 'react'

import { withStyles, WithStyles } from '@material-ui/styles'

import { Paragraph, Shout, Whisper } from '../typography'
import Link from './Link'
import clsx from 'clsx'

interface ErrorBoundaryState {
  hasError: boolean
  error?: unknown
}

interface Props extends WithStyles<typeof useStyles> {
  /**
   * Is an inline error boundary (middle of page, not app root).
   */
  inline?: boolean
}

const useStyles = () => ({
  root: {
    padding: 32,
    maxWidth: 900,
    margin: 'auto',
  },
  inline: {
    background: 'rgba(128, 128, 128, 0.075)',
  },
})

class ErrorBoundary extends React.Component<Props, ErrorBoundaryState> {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false,
      error: null,
    }
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.

    if (process.env.NODE_ENV !== 'development') {
      return {
        hasError: true,
        error,
      }
    } else {
      throw error
    }
  }

  // componentDidCatch(error, errorInfo) {
  //   // You can also log the error to an error reporting service
  //   // logErrorToMyService(error, errorInfo)
  // }

  render() {
    const { classes, inline } = this.props

    if (this.state.hasError) {
      const RefreshButton = () => (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <Link data-testid="reload-link" onClick={() => window.location.reload()}>
          refreshing the page
        </Link>
      )

      if (inline) {
        return (
          <section data-testid="error-boundary-inline" className={clsx(classes.root, classes.inline)}>
            <Paragraph>Uh oh, something went wrong.</Paragraph>
            <Whisper>
              Please try <RefreshButton />.
            </Whisper>
            <Whisper>
              Still having issues? Let me know <Link url="https://twitter.com/davwheat_">on Twitter</Link>.
            </Whisper>
          </section>
        )
      }

      return (
        <main className={classes.root}>
          <Shout>Uh oh, something went wrong.</Shout>
          <Paragraph bold>It's not you, it's us.</Paragraph>
          <Paragraph>
            Please try <RefreshButton />.
          </Paragraph>
          <Paragraph>
            Still having issues? Let me know <Link url="https://twitter.com/davwheat_">on Twitter</Link>.
          </Paragraph>
        </main>
      )
    }

    return this.props.children
  }
}

export default withStyles(useStyles)(ErrorBoundary)
