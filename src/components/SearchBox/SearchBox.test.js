import React from 'react'
import { renderWithRedux } from '../../setupTests'

import SearchBox from './SearchBox'
import { fireEvent } from '@testing-library/dom'

describe('SearchBox', () => {
  const initialState = {
    cities: [
      { id: 1, name: "Chicago" },
      { id: 2, name: "São Paulo"},
      { id: 3, name: "München"}
    ]
  }

  it('renders correctly', () => {
    const { getByText, getByPlaceholderText, container } = renderWithRedux(<SearchBox />, { initialState })

    const searchBoxResults = container.querySelector('[class^="searchBoxResults"]')
    const citiesNames = ['Chicago', 'São Paulo', 'München']

    expect(searchBoxResults).toBeInTheDocument()
    expect(getByPlaceholderText("Type the name of a city")).toBeInTheDocument()
    citiesNames.forEach(city => {
      expect(getByText(city)).toBeInTheDocument()
    })
  })

  it('filters result list items on text input', () => {
    const { getByPlaceholderText, queryByText } = renderWithRedux(<SearchBox />, { initialState })

    const input = getByPlaceholderText("Type the name of a city")

    expect(queryByText("Chicago")).toBeInTheDocument()
    expect(queryByText("São Paulo")).toBeInTheDocument()

    fireEvent.change(input, { target: { value: "Chi" }})

    expect(queryByText("Chicago")).toBeInTheDocument()
    expect(queryByText("São Paulo")).not.toBeInTheDocument()
  })
})
