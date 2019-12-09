import React from 'react'
import PropTypes from 'prop-types'
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

  return <input
    className={classes.searchBoxInput}
    type="text"
    placeholder="Type the name of a city"
    onChange={onChange}
    onFocus={onFocus}
    value={value}
  />
}

SearchBoxInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func
}

export default SearchBoxInput
