import css from './style.module.css'
import RatingItem from './ratingItem'
import { useState } from 'react'
import Link from 'next/link'
import Helper from '../../../helpers'
import config from '../../../config'
import TRANSLATE from '../../../helpers/translate'
export default function BonusCard({item}) {
    const [openState, setOpenState] = useState(false)
    const [bonusSystem, setBonusSystemState] = useState([])
    const changeBonusSystemState = (index) => {
        setOpenState(true)
        const bonusSystemItems = item.bonus_system.length ? item.bonus_system[index].child : []
        setBonusSystemState(bonusSystemItems)
    }
    const changeState = () => {
        setOpenState(!openState)
        if(!openState) {
            const bonusSystemItems = item.bonus_system.length ? item.bonus_system[0].child : []
            setBonusSystemState(bonusSystemItems)
        } else {
            setBonusSystemState([])
        }
    } 
    const refAction = (item) => Helper.refActivate(item)
    const classToggle = openState ? `${css.toggle}  ${css.rotate_180}` : css.toggle
    return (
        <article className={css.item}>
            <div className={css.card}>
                <div className={css.left}>
                    <img src={item.casino.thumbnail} alt={item.title} width={150} height={96} />
                </div>
                <div className={css.right}>
                    <div className={css.itemTtl}>
                                    <Link href={item.permalink}>
                                        <a>{item.title}</a>
                                    </Link>
                    </div>
                    <div className={css.ratingWrapper}>
                        <div className={css.bonusValue}>
                            {item.value}
                        </div>
                        <RatingItem rating={item.rating} label={TRANSLATE['CONVENIENCE'][config.LANG]} />
                    </div>
                    <div className={css.bonusSystem}>
                        {
                            item.bonus_system.length 
                            ? item.bonus_system.map((itemBonus, indexBonus) => {
                                return <div className={css.bonusSystemItem} 
                                        key={indexBonus} 
                                        onClick={() => {changeBonusSystemState(indexBonus)}
                               }
                                >
                                    {itemBonus.value}
                                </div>
                            })
                            : null
                        }
                    </div>
                    {
                         bonusSystem.length
                         ? <div className={css.bonusSystemWrapper}>
                            {
                                bonusSystem.map((bonusSystemItem, bonusSystemIndex) => {
                                    return <div className={css.bonusSystemRow} key={bonusSystemIndex} >
                                        <span className={css.bonusSystemValue}>{bonusSystemItem.value}</span>
                                    </div>
                                })
                            }
                           </div>
                         : null
                    }
                </div>
            </div>
            <div className={css.action}>
                <Link href={item.permalink}>
                    <a className={css.readMore}>{TRANSLATE.MORE[config.LANG]}</a>
                </Link>
                <button className={css.goTo} onClick={()=>refAction(item)}>{TRANSLATE.GO_TO[config.LANG]}</button>
            </div>
            <button className={classToggle} onClick={()=>changeState()}></button>
        </article>
    )
  }