import React, { useEffect, useState } from 'react'
import { createUseStyles } from 'react-jss'
import { useSelector, useDispatch } from "react-redux";

import { getListOfCities } from '../../services'
import City from '../City'

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
  },
  blankslate: {
    textAlign: 'center',
    gridColumn: '1/4'
  }
})

const CitiesList = () => {
  const classes = useStyles()
  const { cities } = useSelector(state => state.cities)
  const [hasSelected, setHasSelected] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    const loadCitiesList = async () => {
      const data = await getListOfCities()

      dispatch({
        type: 'LOAD_CITIES',
        cities: data
      })

      dispatch({
        type: 'ORDER_CITIES_BY_MAX_TEMPERATURE',
        cities: data
      })
    }

    loadCitiesList()
  }, [dispatch])

  useEffect(() => {
    if (cities) setHasSelected(!!cities.find(city => city.isActive))
  }, [cities])

  return (
    <main className={classes.cardList}>
      {
        hasSelected
          ? cities.map(city => (
              city.isActive && <City
                key={city.id}
                id={city.id}
                name={city.name}
                min={city.tempMin}
                max={city.tempMax}
              />
            ))
          : <h2 className={classes.blankslate}>There are no cities selected :(</h2>
      }
    </main>
  )
}

export default CitiesList
