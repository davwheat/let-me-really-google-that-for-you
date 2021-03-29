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
  centered: {
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
   * Should paragraph be centered
   * @default false
   */
  center?: boolean
  /**
   * Element ID
   */
  id?: string
}

const Loud: React.FC<Props> = ({ children, className, noPadding, center, id }) => {
  const classes = useStyles()

  return (
    <h1 id={id} className={clsx(classes.root, noPadding && classes.noPad, center && classes.centered, className)}>
      {children}
    </h1>
  )
}

export default Loud
