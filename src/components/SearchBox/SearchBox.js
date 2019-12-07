import React, { useState, useEffect } from 'react'
import { useSelector } from "react-redux";
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  dropdown: {
    position: 'relative',
    width: '100%',
    maxWidth: 420
  },
  dropdownResults: {
    display: props => props.isFocused ? 'block' : 'none',
    position: 'absolute',
    width: '100%',
    maxHeight:  240,
    paddingLeft: 0,
    top: 20,
    left: 0,
    border: '1px solid #ddd',
    overflow: 'auto'
  },
  dropdownResultsItem: {
    padding: 16,
    backgroundColor: '#fff',
    listStyle: 'none'
  }
})

const SearchBox = () => {
  const { cities } = useSelector(state => state.cities)
  const [results, setResults] = useState([])
  const [searchString, setSearchString] = useState('')
  const [isFocused, setFocus] = useState(false)
  const classes = useStyles({ isFocused })

  useEffect(() => {
    setResults(cities)
  }, [cities])

  const handleChange = event => {
    const value = event.target.value
    const filteredResults = filterResults(value)

    setSearchString(value)
    setResults(filteredResults)
  }

  const filterResults = value => {
    return cities
      .filter(city => city.name.toLowerCase().search(value.toLowerCase()) !== -1)
  }

  const handleFocus = () => {
    setFocus(true)
  }

  const handleBlur = () => {
    setFocus(false)
  }

  return (
    <div className={classes.dropdown}>
      <input
        type="text"
        placeholder="Type the name of a city"
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={searchString}
      />
      <ul className={classes.dropdownResults}>
        {
          results && results.map(result => (
            <li
              key={result.id}
              className={classes.dropdownResultsItem}
            >
              {result.name}
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default SearchBox
