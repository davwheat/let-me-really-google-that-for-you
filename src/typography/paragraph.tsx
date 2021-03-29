import { makeStyles } from '@material-ui/styles'
import clsx from 'clsx'
import React from 'react'

const useStyles = makeStyles({
  root: {
    paddingBottom: 12,
    lineHeight: 1.4,
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
  /**
   * Should be rendered as `display: inline`
   * @default false
   */
  inline?: boolean
}

const Paragraph: React.FC<Props> = ({ children, className, noPadding, inline, bold, center }) => {
  const classes = useStyles()

  const props = {
    className: clsx(classes.root, noPadding && classes.noPad, bold && classes.bold, center && classes.centered, className),
  }

  if (inline) {
    return <span {...props}>{children}</span>
  } else {
    return <p {...props}>{children}</p>
  }
}

export default Paragraph
