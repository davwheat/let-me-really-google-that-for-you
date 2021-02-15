import { makeStyles } from '@material-ui/styles'
import React, { useEffect, useState } from 'react'

import FocusTrap from 'focus-trap-react'
import { Portal } from 'react-portal'
import Loud from '../typography/loud'
import { Breakpoints } from '../data'
import { v4 as uuid } from 'uuid'

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100vw',
    height: 'max-content',
    maxWidth: 800,
    maxHeight: 700,
    minHeight: 400,
    border: '2px solid black',
    padding: '16px 24px',
    backgroundColor: '#fff',
    zIndex: 99999999999,

    [`@media ${Breakpoints.upTo.medium}`]: {
      height: '100vh',
      maxHeight: 'none',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      transform: 'none',
    },
  },
  backdrop: {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    background: 'rgb(0, 0, 0, 0.4)',
    zIndex: 99999999998,
  },
  header: {
    display: 'flex',
  },
  heading: {
    flex: 1,
  },
  closeButton: {
    height: 32,
    width: 32,
    cursor: 'pointer',
    '&:focus': {
      outline: '2px solid orange',
    },

    '&:hover': {
      background: '#000',
      fill: '#fff',
    },
  },
})

interface Props {
  /**
   * Title of the modal
   */
  title: string
  /**
   * Modal content
   */
  children: React.ReactNode
  /**
   * Callback when modal is closed
   */
  onClose?: () => void
}

const Modal: React.FC<Props> = ({ title, children, onClose }) => {
  const [modalShownState, setModalShownState] = useState<boolean>(true)
  const classes = useStyles()

  function closeModal() {
    setModalShownState(false)
    if (typeof onClose === 'function') onClose()
  }

  function keyDownClose(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      closeModal()
    }
  }

  useEffect(() => {
    if (modalShownState) {
      document.body.addEventListener('keydown', keyDownClose)

      return () => {
        document.body.removeEventListener('keydown', keyDownClose)
      }
    }
  })

  if (!modalShownState) return null

  const headingId = uuid()

  return (
    <Portal>
      <FocusTrap>
        <>
          <div tabIndex={-1} aria-hidden className={classes.backdrop} onClick={closeModal} />
          <div className={classes.root} role="dialog" aria-modal="true" aria-labelledby={headingId}>
            <header className={classes.header}>
              <Loud id={headingId} className={classes.heading}>
                {title}
              </Loud>
              <button title="Close dialog" aria-label="Close dialog" className={classes.closeButton} onClick={closeModal}>
                <svg width={32} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    // eslint-disable-next-line
                    d="M13 11.9l1.1-1.1c1.3-1.2 3.1-2.8 4.3-4.2.3-.4.4-.4.1-.9-.2-.4-.8-.6-1.2-.2-1.8 1.8-3.5 3.6-5.3 5.4l-1-1C9.8 8.8 8.7 7.6 7.5 6.4c-.3-.2-.9-1.2-1.5-.8-.4.3-.5.8-.2 1.2 1.7 1.8 3.4 3.5 5.1 5.1l-1.4 1.4c-.8.8-2.8 2.5-3.9 3.9-.6.8.3 1.7 1 1 1.2-1 3-2.9 3.9-3.9.5-.5.9-1 1.4-1.4l1.7 1.7c.9 1 2.6 2.8 3.4 3.5 1 .8 1.9-.3 1-1.1-1.4-1.3-3.3-3.3-5-5.1z"
                  />
                </svg>
              </button>
            </header>
            <article>{children}</article>
          </div>
        </>
      </FocusTrap>
    </Portal>
  )
}

export default Modal
