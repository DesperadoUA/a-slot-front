import css from './style.module.css'
import { useState } from 'react'
import Link from 'next/link'
import config from '../../../config'
import TRANSLATE from '../../../helpers/translate'
import Helper from '../../../helpers'
export default function NewsCard({item}) {
    const [openState, setOpenState] = useState(false)
    const changeState = () => setOpenState(!openState)
    const refAction = (item) => Helper.refActivate(item)
    const classToggle = openState ? `${css.toggle}  ${css.rotate_180}` : css.toggle
    const classReadMore = item.ref.length ? css.readMore : css.fullReadMore
    return (
        <article className={css.item}>
            <div className={css.card}>
                <div className={css.left}>
                    <img src={item.thumbnail} alt={item.title} width={150} height={96} />
                </div>
                <div className={css.right}>
                    <div className={css.itemTtl}>
                                    <Link href={item.permalink}>
                                        <a>{item.title}</a>
                                    </Link>
                    </div>
                    <div className={css.data}>{item.create_at.slice(0, 10)}</div>
                    {
                        openState 
                        ? <div className={css.shortDesc}>{item.short_desc}</div>
                        : null
                    }
                    <div className={css.action}>
                        <Link href={item.permalink}>
                            <a className={classReadMore}>{TRANSLATE.MORE[config.LANG]}</a>
                        </Link>
                        {
                            item.ref.length 
                            ? <button className={css.goTo} onClick={()=>refAction(item)}>{TRANSLATE.GO_TO[config.LANG]}</button>
                            : null
                        }
                    </div>
                </div>
            </div>
            <button className={classToggle} onClick={()=>changeState()}></button>
        </article>
    )
  }