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
    default:
      return state
  }
}
