import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import BulletSeparator from '../src/components/BulletSeparator'

describe('BulletSeparator', () => {
  it('correctly shows a BulletSeparator', async () => {
    render(<BulletSeparator />)

    const separator = screen.getByRole('separator')

    expect(separator).toHaveTextContent('•')
    expect(separator).toHaveAttribute('class')
  })
})
