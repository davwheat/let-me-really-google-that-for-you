import { makeStyles } from '@material-ui/styles'
import clsx from 'clsx'
import React from 'react'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    padding: '0 8px',
    alignItems: 'center',
    flexDirection: 'column',
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
  center: {
    textAlign: 'center',
  },
})

interface Props {
  className?: string
  innerClassName?: string
  noSpacing?: boolean
  noMaxWidth?: boolean
  center?: boolean
}

const TextContainer: React.FC<Props> = ({ children, className, noSpacing, noMaxWidth, innerClassName, center = false, ...props }) => {
  const classes = useStyles()

  return (
    <section className={clsx(classes.root, !noSpacing && classes.space, className)} {...props}>
      <div className={clsx(classes.inner, noMaxWidth && classes.noMaxWidth, center && classes.center, innerClassName)}>{children}</div>
    </section>
  )
}

export default TextContainer
