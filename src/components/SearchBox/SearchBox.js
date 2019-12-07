import React from 'react'
import { useSelector } from "react-redux";

const SearchBox = () => {
  const { cities } = useSelector(state => state.cities)

  return (
    <div>
      <input type="text" placeholder="Type the name of a city" />
      <ul>
        {
          cities && cities.map(city => <li key={city.id}>{city.name}</li>)
        }
      </ul>
    </div>
  )
}

export default SearchBox
