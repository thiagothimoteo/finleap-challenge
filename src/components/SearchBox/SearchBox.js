import React, { useState, useEffect, useRef } from 'react'
import { useSelector } from "react-redux";
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
  const { cities } = useSelector(state => state.cities)
  const [results, setResults] = useState([])
  const [searchString, setSearchString] = useState('')
  const [isActive, setActive] = useState(false)
  const classes = useStyles({ isActive })

  const dropdownRef = useRef(null)

  useEffect(() => {
    setSearchString('')
    setResults(cities)
    setActive(false)
  }, [cities])

  const filterResults = value => {
    return cities.filter(city => city.name.toLowerCase().search(value.toLowerCase()) !== -1)
  }

  const handleChange = value => {
    const filteredResults = filterResults(value)

    setSearchString(value)
    setResults(filteredResults)
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
      />
    </div>
  )
}

export default SearchBox
