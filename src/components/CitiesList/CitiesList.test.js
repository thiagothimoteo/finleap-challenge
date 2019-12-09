import React from 'react'
import { waitForElementToBeRemoved, fireEvent } from '@testing-library/react'

import { renderWithRedux } from '../../setupTests'
import CitiesList from './CitiesList'

describe('CitiesList', () => {
  it('renders blankslate when there is no active city', () => {
    const { getByText } = renderWithRedux(<CitiesList />)
    const blankslate = getByText("There are no cities selected :(")

    expect(blankslate).toBeInTheDocument()
  })

  it('renders initial cities list correctly', async () => {
    const { getByText, container } = renderWithRedux(<CitiesList />)

    await waitForElementToBeRemoved(() => getByText("There are no cities selected :("))

    const cityCards = container.querySelectorAll('[class^="cardList"] > [class^="cityCard"]')

    expect(cityCards.length).toBe(10)
  })

  it('removes city from list', async () => {
    const { getByText, queryByText } = renderWithRedux(<CitiesList />)

    await waitForElementToBeRemoved(() => getByText("There are no cities selected :("))

    expect(queryByText('Rio de Janeiro')).toBeInTheDocument()

    fireEvent.click(getByText('Rio de Janeiro'))

    expect(queryByText('Rio de Janeiro')).toBeNull()
  })
})
