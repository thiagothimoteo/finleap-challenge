export const initialState = []

export default (state = initialState, action) => {
  switch(action.type) {
    case 'LOAD_CITIES':
      return [...state, ...action.cities]
    case 'ADD_CITY':
      return state.map(city => {
        if (city.id.toString() === action.cityID) {
          city.isActive = true
        }
        return city
      })

    case 'REMOVE_CITY':
      return state.map(city => {
        if (city.id === action.cityID) {
          city.isActive = false
        }
        return city
      })
    case 'ORDER_CITIES_BY_MAX_TEMPERATURE':
      return state.concat().sort((cityA, cityB) =>
        cityB.tempMax - cityA.tempMax
      )
    default:
      return state
  }
}
