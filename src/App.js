import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { createUseStyles } from 'react-jss'
import CitiesList from './components/CitiesList'
import SearchBox from './components/SearchBox'
import { getListOfCities } from './services'

const useStyles = createUseStyles({
  container: {
    maxWidth: 1000,
    margin: "0 auto",
    padding: 32,
    '& > *': {
      marginBottom: 32
    }
  },
  title: {
    textAlign: 'center',
    marginBottom: 32
  }
})

const App = () => {
  const { cities } = useSelector(state => state.cities)
  const [hasSelected, setHasSelected] = useState(false)
  const dispatch = useDispatch()
  const classes = useStyles()

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
    <div className={classes.container}>
      <header>
        <h1 className={classes.title}>Weather Monster</h1>
        <SearchBox />
      </header>
      <main>
        {
          hasSelected
            ? <CitiesList cities={cities} />
            : <p>There are no cities selected :(</p>
        }
      </main>
    </div>
  )
}

export default App;
