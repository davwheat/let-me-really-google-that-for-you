import React from 'react'

import { makeStyles } from '@material-ui/styles'

import SearchIcon from '../../../assets/search-engines/google/search-icon.inline.svg'
import VoiceSearchIcon from '../../../assets/search-engines/google/voice-search.inline.svg'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    width: '100%',
    maxWidth: 550,
    height: 44,
    boxSizing: 'border-box',
    padding: '16px 5px',
    margin: '0 8px',
    borderRadius: 22,
    border: '1px solid #dfe1e5',
    '&:hover': {
      backgroundColor: '#fff',
      boxShadow: '0 1px 6px rgb(32 33 36 / 28%)',
      borderColor: 'rgba(223,225,229,0)',
    },
  },
  searchIcon: {
    flexShrink: 0,
    display: 'block',
    width: 20,
    height: 20,
    fill: '#9aa0a6',
    marginRight: 13,
    marginLeft: 10,
  },
  searchBox: {
    display: 'block',
    flexGrow: 1,
    border: 'none',
    background: 'transparent',
    color: 'inherit',
    padding: 0,
    font: 'inherit',
    appearance: 'none',
    '&:focus': {
      outline: 'none',
    },
  },
  voiceSearchIcon: {
    flexShrink: 0,
    display: 'block',
    width: 24,
    height: 24,
    marginLeft: 13,
    marginRight: 10,
    cursor: 'pointer',
  },
})

interface Props {
  value: string
  id?: string
}

const GoogleSearchBox = React.forwardRef<HTMLDivElement, Props>(({ value, id }, ref) => {
  const classes = useStyles()

  return (
    <div id={id} ref={ref} className={classes.root}>
      <SearchIcon className={classes.searchIcon} />
      <input className={classes.searchBox} type="text" readOnly value={value} />
      <VoiceSearchIcon className={classes.voiceSearchIcon} />
    </div>
  )
})

export default GoogleSearchBox
