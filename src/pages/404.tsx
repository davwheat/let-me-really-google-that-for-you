import React from 'react'

import { makeStyles } from '@material-ui/styles'

import Layout from '../components/Layout'
import Link from '../components/Link'
import BodySection from '../components/BodySection'
import SEO from '../components/SEO'
import { Paragraph, Shout } from '../typography'

const useStyles = makeStyles({
  heading: {
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 16,
  },
})

const IndexPage: React.FC = () => {
  const classes = useStyles()

  return (
    <Layout>
      <SEO title="Page not found" />

      <Shout noPadding className={classes.heading}>
        Let me REALLY Google that for you
      </Shout>

      <BodySection>
        <Shout>This page doesn't exist</Shout>

        <Paragraph>
          <Link internal className={classes.linkOrBtn} url="/">
            Go to home page
          </Link>
        </Paragraph>
      </BodySection>
    </Layout>
  )
}

export default IndexPage
