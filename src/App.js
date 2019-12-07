import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { createUseStyles } from 'react-jss'
import CitiesList from './components/CitiesList'
import SearchBox from './components/SearchBox'

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
  const dispatch = useDispatch()
  const classes = useStyles()

  useEffect(()=> {
    const getListOfCities = async () => {
      const response = await fetch(`${process.env.REACT_APP_OPEN_WEATHER_API_URL}group?id=${process.env.REACT_APP_CITIES_ID}&appid=${process.env.REACT_APP_OPEN_WEATHER_API_ID}&units=metric`)

      const data = await response.json()

      const citiesList = data.list.map((city, index) => (
        {
          id: city.id,
          name: city.name,
          tempMin: city.main.temp_min,
          tempMax: city.main.temp_max,
          isActive: index < 10
        }
      ))

      dispatch({
        type: 'LOAD_CITIES',
        cities: citiesList
      })

      dispatch({
        type: 'ORDER_CITIES_BY_MAX_TEMPERATURE',
        cities: citiesList
      })
    }
    getListOfCities()
  }, [dispatch])

  return (
    <div className={classes.container}>
      <header>
        <h1 className={classes.title}>Weather Monster</h1>
        <SearchBox />
      </header>
      <main>
        <CitiesList />
      </main>
    </div>
  );
}

export default App;
