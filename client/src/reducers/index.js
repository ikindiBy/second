import { combineReducers } from 'redux'
import productsReducer from './productsReducer'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
    productsReducer,
    visibilityFilter,
})