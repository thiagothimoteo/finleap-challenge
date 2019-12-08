import React from 'react'
import { renderWithRedux } from '../../setupTests'

import SearchBoxResults from './SearchBoxResults'
import { fireEvent, getByText } from '@testing-library/dom'

describe('SearchBoxResults', () => {
  it('renders results correctly', () => {
    const results = [
      {
        id: 1,
        name: 'Chicago'
      }, {
        id: 2,
        name: 'São Paulo'
      },
      {
        id: 3,
        name: 'München'
      }
    ]

    const citiesNames = ['Chicago', 'São Paulo', 'München']

    const { getByText, container } = renderWithRedux(
      <SearchBoxResults results={results} isActive={true} />
    )

    const searchBoxResults = container.querySelector('[class^="searchBoxResults"]')

    expect(searchBoxResults).toBeVisible()

    citiesNames.forEach(city => {
      expect(getByText(city)).toBeInTheDocument()
    })
  })

  it('it does not show search box results when "isActive" prop is false', () => {
    const results = [
      {
        id: 1,
        name: 'Chicago'
      }, {
        id: 2,
        name: 'São Paulo'
      },
      {
        id: 3,
        name: 'München'
      }
    ]

    const { container } = renderWithRedux(
      <SearchBoxResults results={results} isActive={false} />
    )

    const searchBoxResults = container.querySelector('[class^="searchBoxResults"]')

    expect(searchBoxResults).not.toBeVisible()
  })

  it('it calls "handleClick" when a results item is clicked', () => {
    const results = [
      {
        id: 1,
        name: 'Chicago'
      }, {
        id: 2,
        name: 'São Paulo'
      },
      {
        id: 3,
        name: 'München'
      }
    ]

    const handleClick = jest.fn()

    const { getByText } = renderWithRedux(
      <SearchBoxResults results={results} onClick={handleClick} />
    )

    fireEvent.click(getByText('São Paulo'))

    expect(handleClick).toHaveBeenCalled()
  })
})
