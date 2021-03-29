import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import { Loud } from '../../src/typography'

describe('Loud', () => {
  it('works', async () => {
    render(<Loud>text</Loud>)

    const text = screen.queryByText(/text/i)

    expect(text).not.toBeNull()
    expect(text.nodeName).toMatch(/^h1$/i)
  })

  it('renders without padding', async () => {
    render(<Loud noPadding>text</Loud>)

    const text = screen.queryByText(/text/i)

    expect(text).toHaveStyle('padding-bottom: 0')
  })

  it('renders centered', async () => {
    render(<Loud center>text</Loud>)

    const text = screen.queryByText(/text/i)

    expect(text).toHaveStyle('text-align: center')
  })

  it('uses custom classNames', async () => {
    render(<Loud className="test">text</Loud>)

    const text = screen.queryByText(/text/i)

    expect(text).toHaveAttribute('class', expect.stringMatching(/test/i))
  })

  it('uses custom IDs', async () => {
    render(<Loud id="test">text</Loud>)

    const text = screen.queryByText(/text/i)

    expect(text).toHaveAttribute('id', expect.stringMatching(/test/i))
  })
})
