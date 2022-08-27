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
    static ratig(rating) {
        let letter = ''
        const ratingConfig = {
            'A+': {
                letter: 'A+',
                classStyle: 'rating_a_plus'
            },
            'A': {
                letter: 'A',
                classStyle: 'rating_a'
            },
            'A-': {
                letter: 'A-',
                classStyle: 'rating_a_minus'
            },
            'B+': {
                letter: 'B+',
                classStyle: 'rating_b_plus'
            },
            'B': {
                letter: 'B',
                classStyle: 'rating_b'
            },
            'B-': {
                letter: 'B-',
                classStyle: 'rating_b_minus'
            },
            'C+': {
                letter: 'C+',
                classStyle: 'rating_c_plus'
            },
            'C': {
                letter: 'C',
                classStyle: 'rating_c'
            },
            'C-': {
                letter: 'C-',
                classStyle: 'rating_c_minus'
            },
            'D+': {
                letter: 'D+',
                classStyle: 'rating_d_plus'
            },
            'D': {
                letter: 'D',
                classStyle: 'rating_d'
            },
            'D-': {
                letter: 'D-',
                classStyle: 'rating_d_minus'
            }
        }
        if(rating >= 0 && rating < 9) letter = 'D-'
        else if(rating >= 9 && rating < 19) letter = 'D'
        else if(rating >= 19 && rating < 25) letter = 'D+'
        else if(rating >= 25 && rating < 35) letter = 'C-'
        else if(rating >= 35 && rating < 43) letter = 'C'
        else if(rating >= 43 && rating < 50) letter = 'C+'
        else if(rating >= 50 && rating < 59) letter = 'B-'
        else if(rating >= 59 && rating < 67) letter = 'B'
        else if(rating >= 67 && rating < 75) letter = 'B+'
        else if(rating >= 75 && rating < 83) letter = 'A-'
        else if(rating >= 83 && rating < 91) letter = 'A'
        else if(rating >= 91) letter = 'A+'
        return ratingConfig[letter]
    }
}