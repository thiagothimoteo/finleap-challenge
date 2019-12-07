import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import CitiesList from './components/CitiesList'
import SearchBox from './components/SearchBox'

const App = () => {
  const dispatch = useDispatch()

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
    }
    getListOfCities()
  }, [dispatch])

  return (
    <>
      <header>
        <h1>Weather Monster</h1>
        <SearchBox />
      </header>
      <main>
        <CitiesList />
      </main>
    </>
  );
}

export default App;
