import React, { useEffect } from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import ErrorBoundary from '../src/components/ErrorBoundary'

describe('ErrorBoundary', () => {
  it('works', async () => {
    render(<ErrorBoundary>children</ErrorBoundary>)

    expect(screen.getByText(/children/i)).not.toBeNull()
  })

  it('shows an error message if its children throw an error', async () => {
    // Prevent writing to stderr during this render.
    // const err = console.error
    console.error = jest.fn()

    const ThrowError = () => {
      throw new Error('Oh no!')
    }

    const ErrorThrowingComponent = () => {
      useEffect(() => ThrowError())

      return <div>error</div>
    }

    render(
      <ErrorBoundary>
        <span id="child">no error</span>
        <ErrorThrowingComponent />
      </ErrorBoundary>,
    )

    expect(screen.getByText(/uh oh/i)).toBeVisible()
  })

  it("accepts the 'inline' prop", async () => {
    // Prevent writing to stderr during this render.
    // const err = console.error
    console.error = jest.fn()

    const ThrowError = () => {
      throw new Error('Oh no!')
    }

    const ErrorThrowingComponent = () => {
      ThrowError()

      return <div>error</div>
    }

    render(
      <ErrorBoundary inline>
        <span id="child">no error</span>
        <ErrorThrowingComponent />
      </ErrorBoundary>,
    )

    // error detected
    expect(screen.getByText(/uh oh/i)).not.toBeNull()

    // is inline
    expect(screen.getByTestId('error-boundary-inline')).not.toBeNull()
  })

  it('reloads page when reload button link clicked', async () => {
    // Prevent writing to stderr during this render.
    // const err = console.error
    delete window.location
    window.location = { reload: jest.fn() }
    console.error = jest.fn()

    const ThrowError = () => {
      throw new Error('Oh no!')
    }

    const ErrorThrowingComponent = () => {
      useEffect(() => ThrowError())

      return <div>error</div>
    }

    render(
      <ErrorBoundary>
        <span id="child">no error</span>
        <ErrorThrowingComponent />
      </ErrorBoundary>,
    )

    fireEvent.click(screen.getByTestId('reload-link'))

    await waitFor(() => expect(window.location.reload).toBeCalledTimes(1))
  })

  it('throws during development if children throw an error', async () => {
    const oldEnv = process.env.NODE_ENV

    expect(() => {
      Object.assign(process.env, {
        NODE_ENV: 'development',
      })

      expect(process.env.NODE_ENV).toBe('development')

      const ThrowError = () => {
        throw new Error('Oh no')
      }

      const ErrorThrowingComponent = () => {
        useEffect(() => ThrowError())

        return <div>error</div>
      }

      render(
        <ErrorBoundary>
          no error
          <ErrorThrowingComponent />
        </ErrorBoundary>,
      )
    }).toThrowError(/oh no/i)

    Object.assign(process.env, {
      NODE_ENV: oldEnv,
    })
  })
})
