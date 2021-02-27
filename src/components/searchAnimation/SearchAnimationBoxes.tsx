import React from 'react'

import { Card, CardContent, makeStyles } from '@material-ui/core'
import { Paragraph, Whisper } from '../../typography'

import generateTransitions from '../../functions/generateTransitions'
import clsx from 'clsx'
import { parse as parseColor, fade as fadeColor, toRgb as colorToRgba } from 'micro-color'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'grid',
    width: '100%',
    gap: 8,
    marginBottom: 8,
    gridTemplateColumns: '1fr 1fr 1fr',
    [`@media (max-width: 500px)`]: {
      gridTemplateColumns: '1fr',
      gridTemplateRows: '1fr 1fr 1fr',
    },
  },
  step: {
    ...generateTransitions('opacity'),
  },
  completedStep: {
    borderColor: theme.palette.success.main,
    backgroundColor: colorToRgba(fadeColor(parseColor(theme.palette.success.main), 0.9)),
  },
  futureStep: {
    opacity: 0.4,
  },
  currentStep: {
    borderColor: theme.palette.primary.main,
    backgroundColor: colorToRgba(fadeColor(parseColor(theme.palette.primary.main), 0.9)),
  },
}))

interface Props {
  currentAnimation: number
  searchEngine: SearchEngine
}

const SearchAnimationBoxes: React.FC<Props> = ({ currentAnimation, searchEngine }) => {
  const classes = useStyles()

  function getClasses(animationNum: number): string {
    if (currentAnimation < animationNum) return classes.futureStep
    if (currentAnimation === animationNum) return classes.currentStep
    if (currentAnimation > animationNum) return classes.completedStep

    return ''
  }

  return (
    <section className={classes.root}>
      <Card className={clsx(classes.step, getClasses(1))} variant="outlined">
        <CardContent>
          <Whisper>Step 1</Whisper>
          <Paragraph noPadding>Go to {searchEngine.siteUrl}</Paragraph>
        </CardContent>
      </Card>
      <Card className={clsx(classes.step, getClasses(2))} variant="outlined">
        <CardContent>
          <Whisper>Step 2</Whisper>
          <Paragraph noPadding>Type in your search query</Paragraph>
        </CardContent>
      </Card>
      <Card className={clsx(classes.step, getClasses(3))} variant="outlined">
        <CardContent>
          <Whisper>Step 3</Whisper>
          <Paragraph noPadding>Click 'Search'</Paragraph>
        </CardContent>
      </Card>
    </section>
  )
}

export default SearchAnimationBoxes
