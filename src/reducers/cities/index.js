const initialState = {}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'LOAD_CITIES':
      return {
        ...state,
        cities: action.cities
      }
    default:
      return state
  }
}
