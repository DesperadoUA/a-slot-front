import * as t from '../types'
export function setDevice() {
    return dispatch => {
        let device = 'desctop'
        if(window.screen.width > 767 && window.screen.width < 1200) device = 'tablet' 
        else if(window.screen.width >= 1200) device = 'desctop'
        else if(window.screen.width < 768) device = 'mobile'
        dispatch({
            type: t.SET_DEVICE,
            data: device
         }
        )
    }
}
