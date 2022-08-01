import css from './style.module.css'
import React, { useState } from 'react'
import Helper from '../../../helpers'
import config from '../../../config'
import TRANSLATE from '../../../helpers/translate'
export default function BonusItem({item, casinoItem}) {
    const [active, setActive] = useState(false)
    const refAction = (item) => Helper.refActivate(item)
    return (
        <div className={css.bonusItem} >
            <div className={css.bonusItemTtl} onClick={()=> setActive(!active)}>
                {item.value_1}
            </div>
            {
                active 
                  ? <div className={css.popUp}>
                         <div className={css.bonusCard}>
                            <img src={item.src}  className={css.bonusCardImg}/>
                            <div className={css.bonusCardTtl}>
                                {item.value_1}
                            </div>
                            <div className={css.bonusCardValue}>
                                {item.value_2}
                            </div>
                            <div className={css.bonusCardRules}>
                                Условия бонуса:
                            </div>
                            <div className={css.bonusCardText}>
                                {item.value_3}
                            </div>
                            <button className={css.popUpBtn} type="button" onClick={()=>refAction(casinoItem)}>
                                {TRANSLATE.GO_TO[config.LANG]}
                            </button>
                            <div className={css.close} onClick={()=> setActive(!active)}></div>
                        </div>
                    </div>
                  : null
            }
        </div>
    )
  }