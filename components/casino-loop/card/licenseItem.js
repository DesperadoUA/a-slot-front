import css from './style.module.css'
import React, { useState } from 'react'
import Helper from '../../../helpers'
import config from '../../../config'
import TRANSLATE from '../../../helpers/translate'
export default function LicenseItem({item, casinoItem}) {
    const [active, setActive] = useState(false)
    const refAction = (item) => Helper.refActivate(item)
    return (
        <div className={css.licenseItem}>
            <img src={`/img/${item.value_1}.svg`} className={css.license} 
                 width={36}
                 height={36}
                 onClick={()=> setActive(!active)}
            />
            <div className={css.licenseItemHover}>
                {item.value_2}
            </div>    
            {
                active 
                  ? <div className={css.popUp}>
                        <div className={css.licenseCard}>
                            <div className={css.licenseRow}>
                                <div className={css.licenseCardLeft}>
                                <img src={`/img/${item.value_1}.svg`} className={css.license} 
                                        width={36}
                                        height={36}
                                    />
                                </div>
                                <div className={css.licenseCardRight}>
                                    <div className={css.licenseCardTtl}>
                                        {item.value_3}
                                    </div>
                                    <div className={css.licenseCardText}>
                                        {item.value_4}
                                    </div>
                                </div>
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