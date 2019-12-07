import React from 'react'
import Card from '../Card'

const CardList = ({cities}) => {
  return cities && cities.map(city => {
    if (!city.isActive) return

    return <Card
      key={city.id}
      name={city.name}
      min={city.tempMin}
      max={city.tempMax}
    />
  })
}

export default CardList
