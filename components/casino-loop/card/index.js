import casinoCard from './style.module.css'
import LicenseItem from './licenseItem'
import BonusItem from './bonusItem'
import ExchangeItem from './exchangeItem'
import { useState } from 'react'
import Link from 'next/link'
import Helper from '../../../helpers'
import config from '../../../config'
import TRANSLATE from '../../../helpers/translate'
export default function CasinoCard({item}) {
    const [openState, setOpenState] = useState(false)
    const changeState = () => setOpenState(!openState)
    const refAction = (item) => Helper.refActivate(item)
    const classToggle = openState ? `${casinoCard.toggle}  ${casinoCard.rotate_180}` : casinoCard.toggle
    return (
        <article className={casinoCard.item}>
            <div className={casinoCard.card}>
                <div className={casinoCard.left}>
                    <img src={item.thumbnail} alt={item.title} width={150} height={96} />
                </div>
                <div className={casinoCard.right}>
                    <div className={casinoCard.itemTtl}>
                                    <Link href={item.permalink}>
                                        <a>{item.title}</a>
                                    </Link>
                                    <div className={casinoCard.licenseWrapper}>
                                        {
                                            item.licenses.map((itemLicense, index) => <LicenseItem item={itemLicense} key={index}  casinoItem={item}/>)
                                        }
                                    </div>
                    </div>
                    <div className={casinoCard.ratingWrapper}>
                                    <div className={casinoCard.rating}>
                                        <div className={casinoCard.emptyRating}></div>
                                        <div className={casinoCard.fullRating} style={{'width': item.rating+'%'}}></div>
                                    </div>
                    </div>
                    <div className={casinoCard.bonuses}>
                                    {
                                        item.events.map((itemBonus, index) => <BonusItem item={itemBonus} key={index}  casinoItem={item}/>)
                                    }
                    </div>
                    {
                        openState ?
                                    <div className={casinoCard.exchange}>
                                        {
                                            item.exchange.map((itemExchange, index) => <ExchangeItem item={itemExchange} key={index}/>)
                                        }
                                    </div> 
                                : null
                    }
                    {
                        openState ? 
                                    <div className={casinoCard.characters}>
                                        <div className={casinoCard.charactersItem}>{item.min_deposit}</div>
                                        <div className={casinoCard.charactersItem}>{item.min_payout}</div>
                                    </div>
                                : null
                    }
                </div>
            </div>
            <div className={casinoCard.action}>
                <Link href={item.permalink}>
                    <a className={casinoCard.readMore}>{TRANSLATE.MORE[config.LANG]}</a>
                </Link>
                <button className={casinoCard.goTo} onClick={()=>refAction(item)}>{TRANSLATE.GO_TO[config.LANG]}</button>
            </div>
            <button className={classToggle} onClick={()=>changeState()}></button>
        </article>
    )
  }