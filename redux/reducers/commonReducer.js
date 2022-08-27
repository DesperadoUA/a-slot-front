import * as t from '../types'
const defaultState = {
    device: ''
}
const commonReducer = (state = defaultState, action) => {
        switch(action.type) {
            case t.SET_DEVICE: {
                return {
                    ...state,
                    device: action.data
                }
            }
            default: return state
        }
    }
export default commonReducer