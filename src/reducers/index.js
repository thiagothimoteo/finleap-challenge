import { combineReducers } from 'redux'
import citiesReducers from './cities'

const Reducers = combineReducers({
  cities: citiesReducers
})

export default Reducers
