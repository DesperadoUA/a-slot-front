import casinoCard from './style.module.css'
import LicenseItem from './licenseItem'
import BonusItem from './bonusItem'
import ExchangeItem from './exchangeItem'
import VendorsItem from './vendorsItem'
import LangItem from './langItem'
import RatingItem from './ratingItem'
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
                        <RatingItem rating={item.convenience} label={TRANSLATE['CONVENIENCE'][config.LANG]} />
                        <RatingItem rating={item.replenishment} label={TRANSLATE['DEPOSIT/WITHDRAWAL'][config.LANG]} />
                        <RatingItem rating={item.support} label={TRANSLATE['SUPPORT'][config.LANG]} />
                        <RatingItem rating={item.actions} label={TRANSLATE['GAMES'][config.LANG]} />
                    </div>
                    <div className={casinoCard.bonuses}>
                                    {
                                        item.events.map((itemBonus, index) => <BonusItem item={itemBonus} key={index}  casinoItem={item}/>)
                                    }
                    </div>
                    {
                        openState && item.active_languages.length ?
                                    <div className={casinoCard.exchange}>
                                        {
                                            item.active_languages.map((itemActiveLanguages, index) => <LangItem item={itemActiveLanguages} key={index}/>)
                                        }
                                    </div> 
                                : null
                    }
                    {
                        openState && item.exchange.length ?
                                    <div className={casinoCard.exchange}>
                                        {
                                            item.exchange.map((itemExchange, index) => <ExchangeItem item={itemExchange} key={index}/>)
                                        }
                                    </div> 
                                : null
                    }
                    {
                        openState && item.vendors.length ?
                                    <div className={casinoCard.exchange}> {
                                            <VendorsItem item={item.vendors} />
                                        }
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