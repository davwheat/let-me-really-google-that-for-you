import React from 'react'
import { Meta, Title } from 'react-head'
import { description } from '../../package.json'

interface Props {
  /**
   * Page title
   */
  title?: string
}

const SEO: React.FC<Props> = ({ title }) => {
  const metaDescription = description
  const siteName = 'Let me REALLY Google that for you'

  if (typeof window === 'undefined') {
    return null
  }

  return (
    <>
      <Title>{title ? `${title} | ${siteName}` : siteName}</Title>
      <Meta name="description">{metaDescription}</Meta>
    </>
  )
}

export default SEO
