import { combineReducers } from 'redux'
import citiesReducers from './cards'

const Reducers = combineReducers({
  cities: citiesReducers
})

export default Reducers
