import React from 'react'
import City from '../City'
import { createUseStyles } from 'react-jss'

import { useSelector } from "react-redux";

const useStyles = createUseStyles({
  cardList: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridColumnGap: 32,
    gridRowGap: 32
  },
  '@media (max-width: 1000px)': {
    cardList: {
      gridTemplateColumns: '1fr'
    }
  }
})

const CitiesList = () => {
  const { cities } = useSelector(state => state.cities)
  const classes = useStyles()

  return (
    <div className={classes.cardList}>
      {
        cities
          ? (cities.map(city => (
              city.isActive && <City
                key={city.id}
                name={city.name}
                min={city.tempMin}
                max={city.tempMax}
              />
            )))
          : <div>Nothing to show</div>
      }
    </div>
  )
}

export default CitiesList
