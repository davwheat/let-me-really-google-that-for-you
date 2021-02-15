import React from 'react'

import { makeStyles } from '@material-ui/styles'
import clsx from 'clsx'
import { Breakpoints } from '../data'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    padding: '0 32px',
    alignItems: 'center',
    flexDirection: 'column',
    [`@media ${Breakpoints.upTo.medium}`]: {
      padding: '0 16px',
    },
  },
  space: {
    paddingTop: 32,
    paddingBottom: 32,
  },
  inner: {
    maxWidth: 900,
    width: '100%',
  },
  noMaxWidth: {
    maxWidth: 'none',
  },
})

interface Props {
  noSpacing?: boolean
  className?: string
  noMaxWidth?: boolean
  innerClassName?: string
}

const BodySection: React.FC<Props> = ({ children, noSpacing, className, noMaxWidth, innerClassName, ...props }) => {
  const classes = useStyles()

  return (
    <section className={clsx(classes.root, !noSpacing && classes.space, className)} {...props}>
      <div className={clsx(classes.inner, noMaxWidth && classes.noMaxWidth, innerClassName)}>{children}</div>
    </section>
  )
}

export default BodySection
