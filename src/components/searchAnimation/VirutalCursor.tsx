import React from 'react'

import { makeStyles } from '@material-ui/styles'
import clsx from 'clsx'

import MacCursor from '../../assets/cursors/macos.svg'
import WindowsCursor from '../../assets/cursors/windows.svg'
import generateTransitions from '../../functions/generateTransitions'

export interface Props {
  onTransitionEnd: React.TransitionEventHandler
  transformation?: Partial<{
    x: number
    y: number
  }>
}

const useStyles = makeStyles({
  cursor: {
    pointerEvents: 'none',
    zIndex: 9999,
    position: 'absolute',
    top: 0,
    left: 0,
    width: 16,
    height: 25.1,
    backgroundRepeat: 'no-repeat',
    ...generateTransitions('transform', 'verylong'),
  },
  windowsCursor: {
    background: `url(${WindowsCursor})`,
  },
  macosCursor: {
    background: `url(${MacCursor})`,
  },
})

const VirtualCursor: React.FC<Props> = ({ onTransitionEnd, transformation }) => {
  const classes = useStyles()

  const cursorType = window.navigator.userAgent.toLowerCase().indexOf('macos') === -1 ? 'windows' : 'mac'

  return (
    <div
      onTransitionEnd={onTransitionEnd}
      className={clsx(classes.cursor, cursorType === 'windows' ? classes.windowsCursor : classes.macosCursor)}
      style={{ transform: `translate(${transformation.x || 0}px, ${transformation.y || 0}px)` }}
    />
  )
}

export default VirtualCursor
