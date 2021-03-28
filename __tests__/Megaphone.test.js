import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import { Megaphone } from '../src/typography'

describe('Megaphone', () => {
  it('works', async () => {
    render(<Megaphone>text</Megaphone>)

    const text = screen.queryByText(/text/i)

    expect(text).not.toBeNull()
    expect(text.nodeName).toMatch(/^h1$/i)
  })

  it('renders without padding', async () => {
    render(<Megaphone noPadding>text</Megaphone>)

    const text = screen.queryByText(/text/i)

    expect(text).toHaveStyle('padding-bottom: 0')
  })

  it('uses custom classNames', async () => {
    render(<Megaphone className="test">text</Megaphone>)

    const text = screen.queryByText(/text/i)

    expect(text).toHaveAttribute('class', expect.stringMatching(/test/i))
  })
})
