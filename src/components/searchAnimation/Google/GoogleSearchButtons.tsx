import React from 'react'

import { makeStyles, Tooltip } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 18,
  },
  button: {
    backgroundColor: '#f8f9fa',
    textTransform: 'none',
    border: '1px solid #f8f9fa',
    borderRadius: 4,
    color: '#3c4043',
    margin: '11px 4px',
    padding: '0 16px',
    height: 36,
    fontSize: 14,
    cursor: 'pointer',
    appearance: 'none',
  },
  clickTooltip: {
    animation: `$float 2s ${theme.transitions.easing.sharp} infinite`,
  },
  '@keyframes float': {
    from: {
      transform: 'translateX(0)',
    },
    '50%': {
      transform: 'translateX(-4px)',
    },
    to: {
      transform: 'translateX(0)',
    },
  },
}))

interface Props {
  onSearchButtonClicked?: React.MouseEventHandler
  id?: string
  showClickTooltip: boolean
}

const GoogleSearchButtons: React.FC<Props> = ({ onSearchButtonClicked, id, showClickTooltip }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Tooltip classes={{ tooltip: classes.clickTooltip }} placement="left" arrow open={!!showClickTooltip} title="Click this!">
        <button id={id} className={classes.button} onClick={onSearchButtonClicked}>
          Google Search
        </button>
      </Tooltip>
      <button className={classes.button} onClick={onSearchButtonClicked}>
        I'm Feeling Lucky
      </button>
    </div>
  )
}

export default GoogleSearchButtons
