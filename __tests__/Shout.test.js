import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import { Shout } from '../src/typography'

describe('Shout', () => {
  it('works', async () => {
    render(<Shout>text</Shout>)

    const text = screen.queryByText(/text/i)

    expect(text).not.toBeNull()
    expect(text.nodeName).toMatch(/^h1$/i)
  })

  it('renders without padding', async () => {
    render(<Shout noPadding>text</Shout>)

    const text = screen.queryByText(/text/i)

    expect(text).toHaveStyle('padding-bottom: 0')
  })

  it('uses custom classNames', async () => {
    render(<Shout className="test">text</Shout>)

    const text = screen.queryByText(/text/i)

    expect(text).toHaveAttribute('class', expect.stringMatching(/test/i))
  })
})
