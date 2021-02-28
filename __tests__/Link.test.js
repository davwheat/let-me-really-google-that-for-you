import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import ScrollTo from '../src/functions/ScrollTo'

import Link from '../src/components/Link'

// Handle internal navigation via Gatsby
jest.mock('gatsby')

jest.mock('../src/functions/ScrollTo')

describe('Link', () => {
  it('renders a basic external link', async () => {
    render(<Link url="https://example.com">Basic link</Link>)

    const link = screen.getByRole('link', { name: /basic link/i })

    expect(link).toHaveTextContent('Basic link')
    expect(link).toHaveAttribute('href', 'https://example.com')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('uses custom classnames on links', async () => {
    render(
      <Link url="https://example.com" className="example-class">
        Basic link
      </Link>,
    )

    const link = screen.getByRole('link', { name: /basic link/i })

    expect(link).toHaveAttribute('class', expect.stringContaining('example-class'))
  })

  it('uses custom classnames on buttons', async () => {
    render(
      // eslint-disable-next-line
      <Link onClick={() => {}} className="example-class">
        Basic button
      </Link>,
    )

    const button = screen.getByRole('button', { name: /basic button/i })

    expect(button).toHaveAttribute('class', expect.stringContaining('example-class'))
  })

  it('calls the onClick event handler', async () => {
    const onClick = jest.fn()

    render(
      // eslint-disable-next-line
      <Link onClick={onClick} className="example-class">
        Basic button
      </Link>,
    )

    const button = screen.getByRole('button', { name: /basic button/i })

    fireEvent.click(button)

    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('scrolls to an anchor', async () => {
    render(
      <Link url="#element" className="example-class">
        Anchor link
      </Link>,
    )

    const link = screen.getByRole('link', { name: /anchor link/i })

    fireEvent.click(link)

    expect(ScrollTo.ID).toHaveBeenCalledTimes(1)
    expect(ScrollTo.ID).toHaveBeenCalledWith('element')
  })

  // it('uses Gatsby Link for internal links', async () => {
  //   render(
  //     <Link url="/" internal>
  //       Internal link
  //     </Link>,
  //   )

  //   const link = screen.getByRole('link', { name: /internal link/i })

  //   const { navigate } = jest.requireMock('gatsby')

  //   fireEvent.click(link)

  //   await waitFor(() => expect(navigate).toHaveBeenCalledTimes(1))
  //   expect(navigate).toHaveBeenCalledWith('/')
  // })
})
