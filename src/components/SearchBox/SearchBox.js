import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { createUseStyles } from 'react-jss'

import SearchBoxInput from './SearchBoxInput'
import SearchBoxResults from './SearchBoxResults'

const useStyles = createUseStyles({
  dropdown: {
    position: 'relative',
    width: '100%',
    maxWidth: 500,
    margin: [0, 'auto'],
  }
})

const SearchBox = () => {
  const dispatch = useDispatch()
  const cities = useSelector(state => state.cities)
  const [results, setResults] = useState([])
  const [searchString, setSearchString] = useState('')
  const [isActive, setActive] = useState(false)
  const dropdownRef = useRef(null)
  const classes = useStyles({ isActive })

  useEffect(() => {
    const orderByNameResults = orderByName(cities)

    setSearchString('')
    setResults(orderByNameResults)
    setActive(false)
  }, [cities])

  const filterResults = value => {
    return cities.filter(city => city.name.toLowerCase().search(value.toLowerCase()) !== -1)
  }

  const orderByName = cities => {
    if (!cities) return

    return cities.concat().sort((cityA, cityB) => {
      if (cityA.name > cityB.name) return 1
      if (cityA.name < cityB.name) return -1

      return 0
    })
  }

  const handleClick = value => {
    dispatch({
      type: 'ADD_CITY',
      cityID: value
    })
  }

  const handleChange = event => {
    const value = event.target.value
    const filteredResults = filterResults(value)
    const orderByNameResults = orderByName(filteredResults)

    setSearchString(value)
    setResults(orderByNameResults)
  }

  const handleFocus = () => {
    setActive(true)
  }

  const handleClickOutsideDropdown = event => {
    const dropdown = dropdownRef.current

    if (dropdown && !dropdown.contains(event.target)) {
      setActive(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutsideDropdown, true)

    return () => {
      document.removeEventListener('click', handleClickOutsideDropdown, true)
    }
  })

  return (
    <div className={classes.dropdown} ref={dropdownRef}>
      <SearchBoxInput
        onChange={handleChange}
        onFocus={handleFocus}
        value={searchString}
      />
      <SearchBoxResults
        isActive={isActive}
        results={results}
        onClick={handleClick}
      />
    </div>
  )
}

export default SearchBox
