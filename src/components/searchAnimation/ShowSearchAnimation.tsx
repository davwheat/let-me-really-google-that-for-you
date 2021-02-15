import React from 'react'

import { makeStyles } from '@material-ui/styles'

import BodySection from '../BodySection'
import Link from '../Link'

import getSearchEngineFromId from '../../functions/getSearchEngineFromId'

const useStyles = makeStyles({
  root: {
    padding: 16,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
})

interface Props {
  searchQuery: string
  searchEngineId: SearchEngineId
}

const EnterSearchQuery: React.FC<Props> = ({ searchQuery, searchEngineId }) => {
  const classes = useStyles()

  const searchEngine: SearchEngine = getSearchEngineFromId(searchEngineId)
  const finalSearchUrl = searchEngine.createSearchUrl(searchQuery)

  return (
    <BodySection innerClassName={classes.root}>
      <Link url={finalSearchUrl}>Skip animation &gt;</Link>
    </BodySection>
  )
}

export default EnterSearchQuery
