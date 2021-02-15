import React from 'react'
import AlertBanner from './AlertBanner'

const NoScriptMessage: React.FC = () => {
  return (
    <noscript>
      <AlertBanner title="Error" message="This site requires Javascript to run. Please enable Javascript in your browser to use this site." />
    </noscript>
  )
}

export default NoScriptMessage
