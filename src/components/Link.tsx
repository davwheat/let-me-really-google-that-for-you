import { makeStyles } from '@material-ui/styles'
import clsx from 'clsx'
import React from 'react'
import { Colors } from '../data'
import ScrollTo from '../functions/ScrollTo'
import { Link as GatsbyLink } from 'gatsby'

const useStyles = makeStyles({
  buttonLink: {
    border: 'none',
    appearance: 'none',
    background: 'none',
    outline: 'none',
    padding: 0,
    margin: 0,
  },
  link: {
    color: Colors.primary,
    display: 'inline-block',
    borderBottom: `2px solid ${Colors.primary}`,
    lineHeight: 1,
    cursor: 'pointer',
    textDecoration: 'none',
    fontWeight: 600,
  },
})

interface Props {
  /**
   * Is the link to another page on this site
   */
  internal?: boolean
  url?: string
  title?: string
  onClick?: React.MouseEventHandler<HTMLAnchorElement> | React.MouseEventHandler<HTMLButtonElement>
  className?: string
  id?: string
  target?: '_blank' | '_self' | '_parent' | '_top' | string
}

/**
 * Creates an `<a>` or `<button>` tag which conforms to the design scheme.
 */
const Link: React.FC<Props> = ({ internal = false, url, title, onClick, className, id, children, target }) => {
  const classes = useStyles()

  const isAnchor = typeof url === 'string' && url.startsWith('#')

  const newProps = {
    className: clsx(classes.link, className),
    href: url,
    onClick: isAnchor
      ? e => {
          ScrollTo.ID(url.substr(1))
          e.preventDefault()

          typeof onClick === 'function' && onClick(e)
        }
      : onClick,
    rel: 'noopener noreferrer',
    title,
    id,
    target,
  }

  if (internal) {
    return (
      <GatsbyLink to={newProps.href} {...newProps}>
        {children}
      </GatsbyLink>
    )
  }

  if (onClick || !url) {
    const { className: btnClassName } = newProps

    return (
      <button {...newProps} className={clsx(btnClassName, classes.buttonLink)}>
        {children}
      </button>
    )
  }

  return <a {...newProps}>{children}</a>
}

export default Link
