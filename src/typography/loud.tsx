import React from 'react'

import { makeStyles } from '@material-ui/styles'
import clsx from 'clsx'

const useStyles = makeStyles({
  root: {
    fontWeight: 600,
    fontSize: 36,
    paddingBottom: 24,
    letterSpacing: 0.3,
    '@media (max-width: 767px)': {
      fontSize: 28,
      letterSpacing: 0,
    },
    '@media (max-width: 599px)': {
      fontSize: 24,
    },
  },
  noPad: {
    paddingBottom: 0,
  },
  centred: {
    textAlign: 'center',
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
  /**
   * Should paragraph be centred
   * @default false
   */
  center?: boolean
  /**
   * Element ID
   */
  id?: string
}

const Loud: React.FC<Props> = ({ children, className, noPadding, center }) => {
  const classes = useStyles()

  return <h1 className={clsx(classes.root, noPadding && classes.noPad, center && classes.centred, className)}>{children}</h1>
}

export default Loud
