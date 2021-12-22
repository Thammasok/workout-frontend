import { combineReducers } from 'redux'

// Local
import { xrAccessTokenReducer } from '@Reducers/token'

export default combineReducers({
  accessToken: xrAccessTokenReducer
})
