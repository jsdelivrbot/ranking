import { combineReducers } from 'redux'
import data from './data'
// import visibilityFilter from './visibilityFilter'

const todoApp = combineReducers({
  data,
  // visibilityFilter
})

export default todoApp
