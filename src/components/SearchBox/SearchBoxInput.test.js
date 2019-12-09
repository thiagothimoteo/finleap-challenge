import React from 'react'
import { renderWithRedux } from '../../setupTests'

import SearchBoxInput from './SearchBoxInput'
import { fireEvent } from '@testing-library/dom'

describe('SearchBoxInput', () => {
  it('renders input correctly', () => {
    const { getByPlaceholderText } = renderWithRedux(
      <SearchBoxInput />
    )

    expect(getByPlaceholderText("Type the name of a city")).toBeInTheDocument()
  })

  it('renders input with value correctly', () => {
    const handleChange = jest.fn()

    const { getByDisplayValue } = renderWithRedux(
      <SearchBoxInput value="Chicago" onChange={handleChange} />
    )

    expect(getByDisplayValue("Chicago")).toBeInTheDocument()
  })

  it('calls "handleChange" on change event', () => {
    const handleChange = jest.fn()

    const { getByDisplayValue } = renderWithRedux(
      <SearchBoxInput value="Chicago" onChange={handleChange} />
    )

    fireEvent.change(getByDisplayValue("Chicago"), { target: { value: 'new value' } })

    expect(handleChange).toHaveBeenCalled()
  })

  it('calls "handleFocus" when input receives focus', () => {
    const handleChange = jest.fn()
    const handleFocus = jest.fn()

    const { getByPlaceholderText } = renderWithRedux(
      <SearchBoxInput value="" onFocus={handleFocus} onChange={handleChange} />
    )

    fireEvent.focus(getByPlaceholderText("Type the name of a city"), { target: { value: "Chicago" } })

    expect(handleFocus).toHaveBeenCalled()
  })
})
''
