import settingsReducer from './settingsReducer'
import commonReducer from './commonReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    settingsReducer, commonReducer
})
export default rootReducer