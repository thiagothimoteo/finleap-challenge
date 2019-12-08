import { combineReducers } from 'redux'
import citiesReducers from './cities'

const rootReducer = combineReducers({
  cities: citiesReducers
})

export default rootReducer
