import React from 'react'

import { makeStyles } from '@material-ui/styles'
import clsx from 'clsx'

const useStyles = makeStyles({
  root: {
    fontWeight: 600,
    fontSize: 48,
    paddingBottom: 24,
    letterSpacing: 0.3,
    '@media (max-width: 767px)': {
      fontSize: 36,
      letterSpacing: 0,
    },
    '@media (max-width: 599px)': {
      fontSize: 28,
    },
  },
  noPad: {
    paddingBottom: 0,
  },
})

interface Props {
  /**
   * Extra classes to add in addition to those supplied by this component
   * @default undefined
   */
  className?: string
  /**
   * Should remove top and bottom padding
   * @default false
   */
  noPadding?: boolean
}

const Shout: React.FC<Props> = ({ children, className, noPadding }) => {
  const classes = useStyles()

  return <h1 className={clsx(classes.root, noPadding && classes.noPad, className)}>{children}</h1>
}

export default Shout
