const getListOfCities = async () => {
  const apiUrl = process.env.REACT_APP_OPEN_WEATHER_API_URL
  const citiesID = process.env.REACT_APP_CITIES_ID
  const apiID = process.env.REACT_APP_OPEN_WEATHER_API_ID

  const url = `${apiUrl}group?id=${citiesID}&appid=${apiID}&units=metric`

  const response = await fetch(url)
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

  return citiesList
}

export default getListOfCities
