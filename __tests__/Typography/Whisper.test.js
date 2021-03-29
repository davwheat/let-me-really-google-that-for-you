import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import { Whisper } from '../../src/typography'

describe('Whisper', () => {
  it('works', async () => {
    render(<Whisper>text</Whisper>)

    const text = screen.queryByText(/text/i)

    expect(text).not.toBeNull()
    expect(text.nodeName).toMatch(/^p$/i)
  })

  it('renders in bold', async () => {
    render(<Whisper bold>text</Whisper>)

    const text = screen.queryByText(/text/i)

    expect(text).toHaveStyle('font-weight: 600')
  })

  it('renders without padding', async () => {
    render(<Whisper noPadding>text</Whisper>)

    const text = screen.queryByText(/text/i)

    expect(text).toHaveStyle('padding-bottom: 0')
  })

  it('renders centered', async () => {
    render(<Whisper center>text</Whisper>)

    const text = screen.queryByText(/text/i)

    expect(text).toHaveStyle('text-align: center')
  })

  it('renders inline', async () => {
    render(<Whisper inline>text</Whisper>)

    const text = screen.queryByText(/text/i)

    expect(text).not.toBeNull()
    expect(text.nodeName).toMatch(/^span$/i)
  })

  it('uses custom classNames', async () => {
    render(<Whisper className="test">text</Whisper>)

    const text = screen.queryByText(/text/i)

    expect(text).toHaveAttribute('class', expect.stringMatching(/test/i))
  })
})
