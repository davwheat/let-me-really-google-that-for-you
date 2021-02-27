import React from 'react'

import { makeStyles } from '@material-ui/core'

import BodySection from '../BodySection'
import Link from '../Link'
import TextContainer from '../TextContainer'
import { Whisper } from '../../typography'

import getSearchEngineFromId from '../../functions/getSearchEngineFromId'

import GoogleSearchAnimation from './Google/GoogleSearchAnimation'
import DuckDuckGoSearchAnimation from './DuckDuckGo/DuckDuckGoSearchAnimation'

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

  let Animation: React.FC<SearchAnimationProps> = null

  switch (searchEngineId) {
    default:
    case 'g':
      Animation = GoogleSearchAnimation
      break

    case 'ddg':
      Animation = DuckDuckGoSearchAnimation
      break
  }

  return (
    <>
      <BodySection innerClassName={classes.root}>
        <Animation searchQuery={searchQuery} searchEngine={searchEngine} />
      </BodySection>
      <TextContainer center>
        <Whisper inline>
          <Link url={finalSearchUrl}>Skip animation &gt;</Link>
        </Whisper>
      </TextContainer>
    </>
  )
}

export default EnterSearchQuery
