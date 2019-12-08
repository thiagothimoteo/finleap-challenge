import React from 'react'
import City from '../City'
import { createUseStyles } from 'react-jss'

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

const CitiesList = ({ cities, ...rest}) => {
  const classes = useStyles()

  return (
    <div className={classes.cardList} {...rest}>
      {
        (cities.map(city => (
          city.isActive && <City
            key={city.id}
            id={city.id}
            name={city.name}
            min={city.tempMin}
            max={city.tempMax}
          />
        )))
      }
    </div>
  )
}

export default CitiesList
