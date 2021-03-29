import React from 'react'

import { makeStyles } from '@material-ui/styles'
import clsx from 'clsx'

const useStyles = makeStyles({
  root: {
    paddingBottom: 6,
    lineHeight: 1.2,
    fontSize: 16,
  },
  noPad: {
    paddingBottom: 0,
  },
  bold: {
    fontWeight: 600,
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
   * Should text be bold
   * @default false
   */
  bold?: boolean
  inline?: boolean
}

const Whisper: React.FC<Props> = ({ children, className, noPadding, bold, center, inline = false }) => {
  const classes = useStyles()

  const props = {
    className: clsx(classes.root, noPadding && classes.noPad, bold && classes.bold, center && classes.centered, className),
  }

  if (inline) {
    return <span {...props}>{children}</span>
  }

  return <p {...props}>{children}</p>
}

export default Whisper
