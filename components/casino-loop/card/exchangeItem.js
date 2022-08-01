import css from './style.module.css'
import React, { useState } from 'react'
import Helper from '../../../helpers'
import config from '../../../config'
import TRANSLATE from '../../../helpers/translate'
export default function ExchangeItem({item}) {
    const [active, setActive] = useState(false)
    return (
        <div className={css.exchangeItem} >
            <div className={css.exchangeItemTtl} onClick={()=> setActive(!active)}>
                {item.value_2}
            </div>
            {
                active 
                  ? <div className={css.popUp}>
                         <div className={css.exchangeCard}>
                            <div className={css.exchangeCardTtl}>Пополнить баланс можно через:</div>
                            <div className={css.exchangeCardImg}>
                            {
                                item.value_1.map((itemImg, index)=>{
                                   return <img src={`/img/${itemImg}.svg`} key={index}/>
                                })
                            }
                            </div>
                            <div className={css.exchangeCardText}>
                                {item.value_3}
                            </div>
                            <div className={css.exchangeCardText}>
                                {item.value_4}
                            </div>
                            <div className={css.close} onClick={()=> setActive(!active)}></div>
                        </div>
                    </div>
                  : null
            }
        </div>
    )
  }