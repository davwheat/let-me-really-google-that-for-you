import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Layout from '../src/components/Layout'

jest.mock('../src/components/Footer', () => {
  return {
    __esModule: true,
    default: () => {
      return <footer id="footer"></footer>
    },
  }
})

describe('Layout', () => {
  it('renders children', async () => {
    render(<Layout>Main body content</Layout>)

    const main = screen.getByRole('main')

    expect(main).toHaveTextContent('Main body content')
  })

  it('renders the Footer', async () => {
    render(<Layout>Main body content</Layout>)

    const footer = screen.getByRole('contentinfo')

    expect(footer).toHaveAttribute('id', 'footer')
  })
})
