 import * as t from '../types'
const defaultState = {
    settings: []
}
const settingsReducer = (state = defaultState, action) => {
        switch(action.type) {
            case t.SET_SETTINGS: {
                return {
                    ...state,
                    settings: action.data
                }
            }
            default: return state
        }
    }
export default settingsReducer