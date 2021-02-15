import { makeStyles } from '@material-ui/styles'
import React from 'react'

const useStyles = makeStyles({
  root: {
    listStyle: 'none',
    margin: 0,
    marginBottom: 8,
    paddingLeft: 18,
    '& > li': {
      marginBottom: 8,
      marginLeft: 4,
      '&::before': {
        content: '""',
        display: 'inline-block',
        verticalAlign: 'middle',
        marginTop: '-.25em',
        backgroundColor: ' #000',
        width: 8,
        height: 8,
        marginRight: 12,
        marginLeft: -16,
      },
    },
  },
})

/**
 * Wrapper for a custom-styled bullet point list.
 *
 * Define list items like you would in normal HTML with `<li>` tags.
 */
const BulletListWrapper: React.FC = ({ children }) => {
  const classes = useStyles()

  return <ul className={classes.root}>{children}</ul>
}

export default BulletListWrapper
