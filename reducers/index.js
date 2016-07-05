
import { combineReducers }          from 'redux'
import { routerReducer as routing } from 'react-router-redux'

export default combineReducers({
  errors,
  routing
})

function errors (state = [], action) {
  switch (action.type) {
    case con.ADD_ERROR:
      return [ ...state, action.errorMessage ]

    default:
      return state
  }
}
