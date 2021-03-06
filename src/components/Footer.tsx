import React from 'react'

import { Whisper } from '../typography'
import BulletSeparator from './BulletSeparator'
import Link from './Link'
import BodySection from './BodySection'
import { makeStyles } from '@material-ui/styles'

import { SearchEngineNames } from '../data'
import packageJson from '../../package.json'

const SITE_VERSION = packageJson.version

const useStyles = makeStyles({
  contactLinks: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: 24,
    paddingBottom: 16,
    '& p': {
      textAlign: 'center',
      paddingBottom: 4,
    },
  },
})

const searchEngineNames = SearchEngineNames.join(', ')

const Footer: React.FC = () => {
  const classes = useStyles()

  return (
    <footer>
      <BodySection>
        <Whisper bold>
          Made with{' '}
          <span role="img" aria-label="love">
            <img draggable="false" className="twemoji" alt="love" src="https://twemoji.maxcdn.com/v/13.0.1/72x72/2764.png" />
          </span>{' '}
          by David Wheatley - &copy; {new Date().getFullYear()}
        </Whisper>

        <Whisper>{searchEngineNames} and LMGTFY are trademarks of their respective owners.</Whisper>

        <Whisper>Website version {SITE_VERSION}</Whisper>

        <div className={classes.contactLinks}>
          <Whisper>
            <Link target="_blank" url="https://github.com/davwheat">
              GitHub
            </Link>

            <BulletSeparator />

            <Link target="_blank" url="https://twitter.com/davwheat_">
              Twitter
            </Link>

            <BulletSeparator />

            <Link target="_blank" url="mailto:lmgtfy@davwheat.dev">
              Email
            </Link>
          </Whisper>
        </div>
      </BodySection>
    </footer>
  )
}

export default Footer
