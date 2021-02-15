import { makeStyles } from '@material-ui/styles'
import clsx from 'clsx'
import React from 'react'
import { Colors } from '../data'
import { Paragraph } from '../typography'

const useStyles = makeStyles({
  root: {
    width: '100%',
    padding: '12px 16px',
    background: Colors.dark,
    color: Colors.offWhite,
    fontSize: 18,
  },
  afterHeading: {
    marginTop: -6,
  },
  title: {
    paddingBottom: 4,
  },
  padBottom: {
    marginBottom: 16,
  },
})

interface Props {
  /**
   * Alert title
   */
  title: string
  /**
   * Alert message
   */
  message: string
  /**
   * Removes top and bottom padding
   */
  noPadding?: boolean
  /**
   * Moves up slightly to improve spacing under a heading
   */
  afterHeading?: boolean
  /**
   * Class name for the inner AlertBanner container
   */
  innerClassName?: string
}

const AlertBanner: React.FC<Props> = ({ title, message, noPadding = false, afterHeading = false, innerClassName }) => {
  const classes = useStyles()

  return (
    <section className={clsx(classes.root, !noPadding && classes.padBottom, afterHeading && classes.afterHeading)}>
      <div className={innerClassName}>
        <Paragraph className={classes.title} bold>
          {title}
        </Paragraph>
        <Paragraph noPadding>{message}</Paragraph>
      </div>
    </section>
  )
}

export default AlertBanner
