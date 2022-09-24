import { useState } from 'react'
import css from './style.module.css'
import config from '../../config'
import TRANSLATE from '../../helpers/translate'
export default function BonusCharacters({data}) {
    const [bonusCharacters, setBonusCharactersState] = useState(data.length ? data[0].child : [])
    const [currentIndex, setCurrentIndex] = useState(0)
    const changeBonusCharactersState = (index) => {
        const bonusSystemItems = data.length ? data[index].child : []
        setBonusCharactersState(bonusSystemItems)
        setCurrentIndex(index)
    }
    return (
        data.length 
        ?   <section className={css.section}>
                <div className='container'>
                    <h2>{TRANSLATE.BONUS_CHARACTERISTICS[config.LANG]}</h2>
                    <div className={css.bonusSystem}>
                        {
                            data.length 
                                ? data.map((itemBonus, indexBonus) => {
                                    const classActive = indexBonus === currentIndex 
                                                           ? `${css.bonusSystemItem} active_tab` 
                                                           : css.bonusSystemItem
                                    return <div className={classActive} 
                                    key={indexBonus} 
                                    onClick={() => {changeBonusCharactersState(indexBonus)}
                            }
                            >
                                {itemBonus.value}
                                </div>
                            })
                            : null
                        }
                    </div>
                    {
                        bonusCharacters.map((item, index) => {
                        return  <div className={css.row} key={index}>
                                    <div className={css.left}>{item.value_1}</div>
                                    <div className={css.right}>
                                        {
                                            item.value_2.map((itemChild, indexChild) => <span className={css.charactersItem} key={indexChild}>{itemChild}</span>)
                                        }
                                    </div>
                                </div>
                        })
                    }
                </div>
            </section>
        :   null
    )
  }