import React from 'react'
import City from '../City'

import { useSelector } from "react-redux";

const CitiesList = () => {
  const { cities } = useSelector(state => state.cities)

  return cities
    ? (cities.map(city => {
        if (!city.isActive) return

        return <City
          key={city.id}
          name={city.name}
          min={city.tempMin}
          max={city.tempMax}
        />
      }))
    : <div>Nothing to show</div>
}

export default CitiesList
