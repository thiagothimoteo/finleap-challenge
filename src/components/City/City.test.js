import React from 'react'
import { renderWithRedux } from '../../setupTests'

import City from './City'
import { fireEvent } from '@testing-library/dom'

describe('City', () => {
  it('renders correctly', () => {
    const { getByText, container } = renderWithRedux(
      <City
        id={1}
        name="Chicago"
        min={0}
        max={5}
        title="Chicago"
      />
    )

    const cityName = getByText('Chicago')
    const cityTempMin = getByText('0')
    const cityTempMax = getByText('5')
    const cityCardTitle = container.querySelector('[class^="cityCard"]').getAttribute('title')

    expect(cityName).toBeInTheDocument()
    expect(cityTempMin).toBeInTheDocument()
    expect(cityTempMax).toBeInTheDocument()
    expect(cityCardTitle).toBe('Chicago')
  })

  it('tests click on city card', () => {
    const handleClick = jest.fn()
    const { container } = renderWithRedux(
      <City
        id={1}
        name="Chicago"
        min={0}
        max={5}
        onClick={handleClick}
      />
    )

    const cityCard = container.querySelector('[class^="cityCard"]')

    fireEvent.click(cityCard)

    expect(handleClick).toHaveBeenCalled()
  })
})
