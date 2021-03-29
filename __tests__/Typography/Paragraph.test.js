import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import { Paragraph } from '../../src/typography'

describe('Paragraph', () => {
  it('works', async () => {
    render(<Paragraph>text</Paragraph>)

    const text = screen.queryByText(/text/i)

    expect(text).not.toBeNull()
    expect(text.nodeName).toMatch(/^p$/i)
  })

  it('renders in bold', async () => {
    render(<Paragraph bold>text</Paragraph>)

    const text = screen.queryByText(/text/i)

    expect(text).toHaveStyle('font-weight: 600')
  })

  it('renders without padding', async () => {
    render(<Paragraph noPadding>text</Paragraph>)

    const text = screen.queryByText(/text/i)

    expect(text).toHaveStyle('padding-bottom: 0')
  })

  it('renders centered', async () => {
    render(<Paragraph center>text</Paragraph>)

    const text = screen.queryByText(/text/i)

    expect(text).toHaveStyle('text-align: center')
  })

  it('renders inline', async () => {
    render(<Paragraph inline>text</Paragraph>)

    const text = screen.queryByText(/text/i)

    expect(text).not.toBeNull()
    expect(text.nodeName).toMatch(/^span$/i)
  })

  it('uses custom classNames', async () => {
    render(<Paragraph className="test">text</Paragraph>)

    const text = screen.queryByText(/text/i)

    expect(text).toHaveAttribute('class', expect.stringMatching(/test/i))
  })
})
