import React from 'react'
import { makeStyles } from '@material-ui/core'
import { Colors } from '../data'

const useStyles = makeStyles({
  separator: {
    display: 'inline-block',
    verticalAlign: 'middle',
    transformOrigin: '50% 50%',
    transform: 'scale(1.75)',
    marginLeft: 8,
    marginRight: 8,
    color: Colors.dark,
  },
})

const BulletSeparator: React.FC = () => {
  const classes = useStyles()

  return (
    <span role="separator" className={classes.separator}>
      •
    </span>
  )
}

export default BulletSeparator
