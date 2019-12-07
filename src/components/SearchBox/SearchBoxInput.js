import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  searchBoxInput: {
    width: '100%',
    maxWidth: 500,
    padding: [12, 16],
    border: '1px solid #ccc',
    borderRadius: '500rem'
  }
})

const SearchBoxInput = ({ value, onChange, onFocus }) => {
  const classes = useStyles()
  const handleChange = event => {
    onChange(event.target.value)
  }

  const handleFocus = () => {
    onFocus()
  }

  return <input
    className={classes.searchBoxInput}
    type="text"
    placeholder="Type the name of a city"
    onChange={handleChange}
    onFocus={handleFocus}
    value={value}
  />
}

export default SearchBoxInput
