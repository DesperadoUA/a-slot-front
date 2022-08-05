import css from './style.module.css'
import React, { useState } from 'react'
import Link from 'next/link'
export default function VendorsItem({item}) {
    const [active, setActive] = useState(false)
    return (
        <div className={css.vendorVrapper}>
            <span className={css.vendorTxt} onClick={()=> setActive(!active)}>
            Кол-во провайдеров: {item.length}
            </span>
           {
                active 
                  ? <div className={css.popUp}>
                        <div className={css.exchangeCard}>
                            <div className={css.licenseRow}>
                                <div className={css.popUpTtl}>Доступные провайдеры</div>
                            </div>
                            <div className={css.close} onClick={()=> setActive(!active)}></div>
                            <div className={css.imgWrapper}>
                            {
                               item.map((vendor, index) => <div key={index} className={css.vendorItem}>
                                                                <Link href={vendor.permalink}>
                                                                <a><img src={vendor.thumbnail} width="64" height="40" /></a>
                                                                </Link>
                                                                <span className={css.vendorText}>{vendor.number_games} игр</span>
                                                            </div>)
                            }        
                            </div>
                        </div>
                    </div>
                  : null
            }
        </div>
    )
  }