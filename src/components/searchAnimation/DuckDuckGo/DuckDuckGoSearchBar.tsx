import React from 'react'

import SearchIcon from '../../../assets/search-engines/duckduckgo/search-icon.inline.svg'
import { makeStyles, Tooltip } from '@material-ui/core'

const barHeight = 46

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    maxWidth: 550,
    height: barHeight,
    boxSizing: 'border-box',
    padding: '16px 0',
    margin: '0 8px',
    borderRadius: 4,
    border: '1px solid rgba(0,0,0,0.15)',
    boxShadow: '0 2px 3px rgb(0 0 0 / 6%)',
    '&:hover': {
      // backgroundColor: '#fff',
      // boxShadow: '0 1px 6px rgb(32 33 36 / 28%)',
      // borderColor: 'rgba(223,225,229,0)',
    },
  },
  searchBox: {
    display: 'block',
    flexGrow: 1,
    border: 'none',
    background: 'transparent',
    color: 'inherit',
    paddingLeft: 16,
    paddingRight: 56,
    font: 'inherit',
    fontSize: 18,
    appearance: 'none',
    '&:focus': {
      outline: 'none',
    },
    '&::placeholder': {
      color: '#aaa',
    },
    '&:not(:placeholder-shown) ~ button': {
      background: '#5b9e4d',
      fill: '#fff',

      '&:hover': {
        background: '#66ad57',
      },
    },
  },
  searchButtonIcon: {
    width: 22,
    height: 22,
    marginTop: 2,
  },
  searchButton: {
    flexShrink: 0,
    display: 'block',
    cursor: 'pointer',
    width: 52,
    height: barHeight,
    background: 'none',
    border: 'none',
    borderRadius: 0,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    padding: 0,
    fill: '#999',
    '&:hover': {
      background: '#5b9e4d',
      fill: '#fff',
    },
  },
  clickTooltip: {
    animation: `$float 2s ${theme.transitions.easing.sharp} infinite`,
  },
  '@keyframes float': {
    from: {
      transform: 'translateY(0)',
    },
    '50%': {
      transform: 'translateY(-4px)',
    },
    to: {
      transform: 'translateY(0)',
    },
  },
}))

interface Props {
  value: string
  showClickTooltip: boolean
  id?: string
  onSearchButtonClicked?: React.MouseEventHandler
  buttonId?: string
}

const DuckDuckGoSearchBox: React.FC<Props> = ({ value, buttonId, onSearchButtonClicked, id, showClickTooltip }) => {
  const classes = useStyles()

  return (
    <div id={id} className={classes.root}>
      <input placeholder="Search the web without being tracked" className={classes.searchBox} type="text" readOnly value={value} />
      <Tooltip classes={{ tooltip: classes.clickTooltip }} placement="bottom" arrow open={!!showClickTooltip} title="Click this!">
        <button className={classes.searchButton} onClick={onSearchButtonClicked} id={buttonId}>
          <SearchIcon className={classes.searchButtonIcon} />
        </button>
      </Tooltip>
    </div>
  )
}

export default DuckDuckGoSearchBox
