import React, { useEffect, useState } from 'react'

import { makeStyles } from '@material-ui/styles'

import GoogleSearchBox from './GoogleSearchBar'
import GoogleSearchButtons from './GoogleSearchButtons'
import VirtualCursor from '../VirutalCursor'

import GoogleLogo from '../../../assets/search-engines/google/logo.inline.svg'

import { SearchAnimation } from '../../../@types/enums'
import SearchAnimationBoxes from '../SearchAnimationBoxes'

import type { Props as VirtualCursorProps } from '../VirutalCursor'

const ElementIds = {
  searchBox: 'google-search-box',
  searchButton: 'google-search-btn',
}

const useStyles = makeStyles({
  root: {
    position: 'relative',
    padding: 16,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    border: '1px solid #ccc',
    paddingTop: 96,
    paddingBottom: 96,
  },
  logo: {
    width: '100%',
    maxWidth: 272,
    marginBottom: 28,
  },
})

type ElementPositions = {
  searchBox: {
    x?: number
    y?: number
    width?: number
    height?: number
  }
  searchButton: {
    x?: number
    y?: number
    width?: number
    height?: number
  }
}

function GetAnimationStep(currentAnimation: SearchAnimation) {
  switch (currentAnimation) {
    case 'NONE':
    case 'MOUSE_MOUSE_TO_SEARCH_BOX':
      return 1

    case 'TYPE_QUERY_IN_SEARCH_BOX':
      return 2

    default:
    case 'MOVE_MOUSE_TO_SEARCH_BUTTON':
    case 'CLICK_BUTTON':
      return 3
  }
}

const GoogleSearchAnimation: React.FC<SearchAnimationProps> = ({ searchQuery, searchEngine }) => {
  const classes = useStyles()
  const finalSearchUrl = searchEngine.createSearchUrl(searchQuery)

  const [elementPositions, setElementPositions] = useState<ElementPositions>({
    searchBox: {
      x: null,
      y: null,
      width: null,
      height: null,
    },
    searchButton: {
      x: null,
      y: null,
      width: null,
      height: null,
    },
  })

  const [currentText, setCurrentText] = useState('')
  const [currentAnimation, setCurrentAnimation] = useState<SearchAnimation>(SearchAnimation.None)

  console.warn('Main search element positions', elementPositions)

  let transformation: VirtualCursorProps['transformation'] = {}

  useEffect(() => {
    let timeout = null

    if (!elementPositions.searchBox.x) {
      const searchBox = document.getElementById(ElementIds.searchBox)

      if (searchBox) {
        setElementPositions(pos => ({
          ...pos,
          searchBox: {
            x: searchBox.offsetLeft,
            y: searchBox.offsetTop,
            width: searchBox.offsetWidth,
            height: searchBox.offsetHeight,
          },
        }))
      }
    }

    if (!elementPositions.searchButton.x) {
      const searchBtn = document.getElementById(ElementIds.searchButton)

      if (searchBtn) {
        setElementPositions(pos => ({
          ...pos,
          searchButton: {
            x: searchBtn.offsetLeft,
            y: searchBtn.offsetTop,
            width: searchBtn.offsetWidth,
            height: searchBtn.offsetHeight,
          },
        }))
      }
    }

    if (currentAnimation === SearchAnimation.TypeQuery) {
      timeout = setTimeout(() => {
        if (currentText.length === searchQuery.length) {
          // all chars have been typed
          setCurrentAnimation(SearchAnimation.MouseToSearchButton)
        }

        const nextLetter = searchQuery.substr(currentText.length, 1)
        setCurrentText(t => `${t}${nextLetter}`)
      }, 150)
    }

    return () => clearTimeout(timeout)
  })

  useEffect(() => {
    if (currentAnimation === SearchAnimation.None) {
      setCurrentAnimation(SearchAnimation.MouseToSearchBox)
    }
  })

  if ([SearchAnimation.MouseToSearchBox, SearchAnimation.TypeQuery].includes(currentAnimation)) {
    transformation = {
      x: elementPositions.searchBox.x + elementPositions.searchBox.width / 2,
      y: elementPositions.searchBox.y + elementPositions.searchBox.height * (3 / 4),
    }
  } else if ([SearchAnimation.MouseToSearchButton, SearchAnimation.ClickButton].includes(currentAnimation)) {
    transformation = {
      x: elementPositions.searchButton.x + elementPositions.searchButton.width / 2,
      y: elementPositions.searchButton.y + elementPositions.searchButton.height * (3 / 4),
    }
  }

  function completeSearch() {
    location.href = finalSearchUrl
  }

  return (
    <>
      <SearchAnimationBoxes currentAnimation={GetAnimationStep(currentAnimation)} />
      <article className={classes.root}>
        <VirtualCursor
          onTransitionEnd={() => {
            setTimeout(() => {
              if (currentAnimation === SearchAnimation.MouseToSearchBox) {
                setCurrentAnimation(SearchAnimation.TypeQuery)
              } else if (currentAnimation === SearchAnimation.MouseToSearchButton) {
                setCurrentAnimation(SearchAnimation.ClickButton)
              }
            }, 250)
          }}
          transformation={transformation}
        />
        <GoogleLogo className={classes.logo} />
        <GoogleSearchBox id={ElementIds.searchBox} value={currentText} />
        <GoogleSearchButtons
          id={ElementIds.searchButton}
          onSearchButtonClicked={currentAnimation === SearchAnimation.ClickButton ? completeSearch : null}
          showClickTooltip={currentAnimation === SearchAnimation.ClickButton}
        />
      </article>
    </>
  )
}

export default GoogleSearchAnimation
