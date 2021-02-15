import React from 'react'

import { makeStyles } from '@material-ui/styles'
import clsx from 'clsx'

const useStyles = makeStyles({
  root: {
    fontWeight: 700,
    fontSize: 76,
    paddingBottom: 16,
    letterSpacing: 1.5,
    '@media (max-width: 1280px)': {
      fontSize: 64,
      letterSpacing: 1.2,
    },
    '@media (max-width: 767px)': {
      fontSize: 54,
      letterSpacing: 0.8,
    },
    '@media (max-width: 599px)': {
      fontSize: 42,
      letterSpacing: 0.4,
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

const Megaphone: React.FC<Props> = ({ children, className, noPadding }) => {
  const classes = useStyles()

  return <h1 className={clsx(classes.root, noPadding && classes.noPad, className)}>{children}</h1>
}

export default Megaphone
