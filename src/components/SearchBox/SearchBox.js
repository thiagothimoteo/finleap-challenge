import React, { useState, useEffect } from 'react'

const SearchBox = ({cities, ...rest}) => {
  const [citiesList, setCitiesList] = useState([])

  useEffect(() => {
    setCitiesList(cities)
  }, [cities])

  return (
    <div {...rest}>
      <input type="text" placeholder="Type the name of a city" />
      <ul>
        {
          citiesList.map(city => <li key={city.id}>{city.name}</li>)
        }
      </ul>
    </div>
  )
}

export default SearchBox
