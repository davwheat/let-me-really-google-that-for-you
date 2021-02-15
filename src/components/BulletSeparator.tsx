import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Colors } from '../data'
import clsx from 'clsx'

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
  light: {
    color: Colors.offWhite,
  },
})

interface Props {
  color?: 'dark' | 'light'
}

const BulletSeparator: React.FC<Props> = ({ color = 'dark' }) => {
  const classes = useStyles()

  return <span className={clsx(classes.separator, color === 'light' && classes.light)}>•</span>
}

export default BulletSeparator
