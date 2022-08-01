import config from '../config'
import TRANSLATE from './translate'
export default class Helper {
    static refActivate(item){
        if(item.ref.length !== 0) {
            const min = 0
            const max = item.ref.length - 1
            const random = Math.floor(Math.random() * (max - min + 1)) + min
            window.open(item.ref[random], '_blank')
        }
    }
    static metaData(data) {
        return {
            title: data.meta_title,
            description: data.description
        }
    }
    static errorMetaData() {
        return {
            title: TRANSLATE.ERROR_TITLE[config.LANG],
            description: TRANSLATE.ERROR_DESCRIPTION[config.LANG]
        }
    }
}