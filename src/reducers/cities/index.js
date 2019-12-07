const initialState = {}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'LOAD_CITIES':
      return {
        ...state,
        cities: action.cities
      }
    case 'ADD_CITY':
      const cities = state.cities.map(city => {
        if (city.id.toString() === action.cityID) {
          city.isActive = true
        }

        return city
      })

      return {
        ...state,
        cities
      }
    case 'ORDER_CITIES_BY_MAX_TEMPERATURE':
      const sortedCities = state.cities.sort((cityA, cityB) => cityB.tempMax - cityA.tempMax)

      return {
        ...state,
        cities: sortedCities
      }
    default:
      return state
  }
}
