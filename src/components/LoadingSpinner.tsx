import { makeStyles } from '@material-ui/styles'
import clsx from 'clsx'
import React from 'react'

const useStyles = makeStyles({
  root: {
    position: 'relative',
    width: 48,
    height: 48,
    margin: 'auto',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      border: '4px solid black',
      borderTopColor: 'transparent',
      borderRadius: '50%',
      animation: '$spin infinite 0.75s linear',
    },
  },
  '@keyframes spin': {
    from: {
      transform: 'rotate(0)',
    },
    to: {
      transform: 'rotate(1turn)',
    },
  },
  showText: {
    marginBottom: 48,
    '&::after': {
      fontWeight: 600,
      position: 'absolute',
      top: 48,
      content: '"Loading"',
      display: 'block',
      textAlign: 'center',
      left: '50%',
      transform: 'translateX(-50%)',
      paddingTop: 8,
    },
  },
})

interface Props {
  /**
   * Show "Loading" text under spinner
   */
  loadingText?: boolean
}

const LoadingSpinner: React.FC<Props> = ({ loadingText = false }) => {
  const classes = useStyles()

  return <div className={clsx(classes.root, loadingText && classes.showText)} />
}

export default LoadingSpinner
