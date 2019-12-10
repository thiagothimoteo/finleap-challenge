import React from 'react'
import { render, waitForElementToBeRemoved } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders correctly', async () => {
    const { getByText, getByPlaceholderText, container } = render(<App />)

    const title = getByText(/Weather Monster/i)
    const input = getByPlaceholderText(/Type the name of a city/i)
    const blankslate = getByText("There are no cities selected :(")

    expect(title).toBeInTheDocument()
    expect(input).toBeInTheDocument()
    expect(blankslate).toBeInTheDocument()

    await waitForElementToBeRemoved(() => getByText("There are no cities selected :("))

    const citiesList = container.querySelector('[class^="container"] > [class^="cardList"]')

    expect(title).toBeInTheDocument()
    expect(input).toBeInTheDocument()
    expect(citiesList).toBeInTheDocument()
    expect(citiesList.children.length).toBe(10)
  });
})
