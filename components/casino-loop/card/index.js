import casinoCard from './style.module.css'
import { useState } from 'react'
import Link from 'next/link'
import Helper from '../../../helpers'
export default function CasinoCard({item}) {
    const [openState, setOpenState] = useState(false)
    const changeState = () => setOpenState(!openState)
    const refAction = (item) => Helper.refActivate(item)
    const classToggle = openState ? `${casinoCard.toggle}  ${casinoCard.rotate_180}` : casinoCard.toggle
    return (
        <article className={casinoCard.item}>
            <div className={casinoCard.card}>
                <div className={casinoCard.left}>
                    <img src={item.thumbnail} alt={item.title} />
                </div>
                <div className={casinoCard.right}>
                    <div className={casinoCard.itemTtl}>
                                    <Link href={item.permalink}>
                                        <a>{item.title}</a>
                                    </Link>
                                    <div className={casinoCard.licenseWrapper}>
                                        {
                                            item.licenses.map((item, index) => <img src={`/img/${item}.png`} className={casinoCard.license}  key={index} />)
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
                                        item.events.map((item, index) => <div className={casinoCard.bonusItem} key={index}>{item.value_1}</div>)
                                    }
                    </div>
                    {
                        openState ?
                                    <div className={casinoCard.exchange}>
                                        {
                                            item.exchange.map((item, index) => <div className={casinoCard.exchangeItem} key={index}>{item.value_1}</div>)
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
                    <a className={casinoCard.readMore}>Подробнее</a>
                </Link>
                <button className={casinoCard.goTo} onClick={()=>refAction(item)}>Перейти</button>
            </div>
            <button className={classToggle} onClick={()=>changeState()}></button>
        </article>
    )
  }