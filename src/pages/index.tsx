import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import BodySection from '../components/BodySection'
import Link from '../components/Link'
import LoadingSpinner from '../components/LoadingSpinner'
import EnterSearchQuery from '../components/urlGenerator/EnterSearchQuery'
import ShowSearchAnimation from '../components/searchAnimation/ShowSearchAnimation'
import { Paragraph, Shout } from '../typography'

import queryString from 'query-string'
import { NoSsr } from '@material-ui/core'

const IndexPage: React.FC = () => {
  const queryParams = typeof window !== 'undefined' ? queryString.parse(window.location.search) : {}
  const searchQuery = queryParams.q
  const searchEngineId: SearchEngineId = queryParams.se || 'g'

  const pageContent = searchQuery ? (
    <ShowSearchAnimation searchQuery={decodeURIComponent(searchQuery.toString())} searchEngineId={searchEngineId} />
  ) : (
    <EnterSearchQuery />
  )

  return (
    <Layout>
      <SEO />

      <BodySection>
        <Shout>Let me REALLY Google that for you</Shout>
        <Paragraph>
          A version of{' '}
          <Link target="_blank" title="Let me Google that for you" url="https://lmgtfy.app/">
            LMGTFY
          </Link>{' '}
          without ads or trackers, and that actually uses Google (or DuckDuckGo if you prefer).
        </Paragraph>
      </BodySection>

      <NoSsr fallback={<LoadingSpinner loadingText />}>{pageContent}</NoSsr>
    </Layout>
  )
}

export default IndexPage
