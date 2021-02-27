import React, { useRef, useState } from 'react'

import { TextField, MenuItem, FormControl, IconButton, InputAdornment, Tooltip, FormHelperText } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import CopyIcon from 'mdi-react/ContentCopyIcon'
import BodySection from '../BodySection'
import { SearchEngines } from '../../data'

import copy from 'copy-text-to-clipboard'
import clsx from 'clsx'
import getSearchEngineFromId from '../../functions/getSearchEngineFromId'

const useStyles = makeStyles({
  root: {
    padding: 16,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  formControl: {
    maxWidth: '100%',
    marginBottom: 16,
  },
  queryBox: {
    width: 400,
    maxWidth: '100%',
    minWidth: '50%',
  },
  generatedUrlContainer: {
    maxWidth: '100%',
    marginTop: 36,
  },
  urlCreated: {},
  urlTextBox: {
    width: 400,
    maxWidth: '100%',
    minWidth: '50%',
  },
})

const EnterSearchQuery: React.FC = () => {
  const classes = useStyles()

  const urlTextBoxRef = useRef<HTMLInputElement>(null)

  const [queryText, setQueryText] = useState('')
  const [searchEngineId, setSearchEngineId] = useState('g')

  const searchEngine = getSearchEngineFromId(searchEngineId)
  const lmrgtfyUrl = queryText === '' ? '' : searchEngine.createLmrgtfyUrl(queryText)

  return (
    <BodySection innerClassName={classes.root}>
      <FormControl className={classes.formControl}>
        <TextField select label="Search engine" className={classes.queryBox} value={searchEngineId} onChange={e => setSearchEngineId(e.target.value)}>
          {SearchEngines.map(engine => (
            <MenuItem value={engine.id} key={engine.id}>
              {engine.name}
            </MenuItem>
          ))}
        </TextField>
      </FormControl>

      <FormControl className={classes.formControl}>
        <TextField label="Search query" className={classes.queryBox} value={queryText} onChange={e => setQueryText(e.target.value)} />
      </FormControl>

      <FormControl className={clsx(classes.generatedUrlContainer, lmrgtfyUrl && classes.urlCreated)}>
        <TextField
          label="LMRGTFY URL"
          onClick={() => urlTextBoxRef.current.select()}
          value={lmrgtfyUrl}
          InputProps={{
            readOnly: true,
            endAdornment: !lmrgtfyUrl ? null : (
              <InputAdornment position="end">
                <Tooltip title="Copy link">
                  <IconButton aria-label="copy link" onClick={() => copy(urlTextBoxRef.current.value)} edge="end">
                    <CopyIcon />
                  </IconButton>
                </Tooltip>
              </InputAdornment>
            ),
          }}
          className={classes.urlTextBox}
          inputProps={{
            ref: urlTextBoxRef,
          }}
        />
        <FormHelperText>Opening this link will show someone how to use {searchEngine.name}.</FormHelperText>
      </FormControl>
    </BodySection>
  )
}

export default EnterSearchQuery
