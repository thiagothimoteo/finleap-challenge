import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  searchBoxResults: {
    display: props => props.isActive ? 'block' : 'none',
    position: 'absolute',
    width: '100%',
    maxHeight:  240,
    paddingLeft: 0,
    top: 0,
    left: 0,
    marginTop: 45,
    border: '1px solid #ddd',
    overflow: 'auto'
  },
  searchBoxResultsItem: {
    padding: [8, 16],
    backgroundColor: '#fff',
    listStyle: 'none',
    '&:hover': {
      backgroundColor: '#eee',
      cursor: 'pointer'
    }
  }
})

const SearchBoxResults = ({ results, isActive, onClick }) => {
  const classes = useStyles({ isActive })

  const handleClick = event => {
    onClick(event.target.id)
  }

  return (
    <ul className={classes.searchBoxResults}>
      {
        results && results.map(result => (
          <li
            key={result.id}
            id={result.id}
            className={classes.searchBoxResultsItem}
            onClick={handleClick}
          >
            {result.name}
          </li>
        ))
      }
    </ul>
  )
}

export default SearchBoxResults
