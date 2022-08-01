import * as t from '../types'
import Builder from '../../DAL'
export function setSettings() {
    return async dispatch => {
        const DAL = new Builder()
        const response = await DAL.setPostType('settings')
                                  .setAction('get')
                                  .get()
        dispatch({
            type: t.SET_SETTINGS,
            data: response.data.body
         }
        )
    }
}