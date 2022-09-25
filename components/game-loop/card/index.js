import css from './style.module.css'
import Link from 'next/link'
import config from '../../../config'
import TRANSLATE from '../../../helpers/translate'
export default function GameCard({item}) {
    return (
        <article className={css.item}>
           <div className={css.card_wrapper}>
                <div className={css.card}>
                    <img src={item.thumbnail} alt={item.title} width={210} height={232} />
                    <div className={css.mask}>
                        <div className={css.ttl}>{item.title}</div>
                        <button className={css.btn}>{TRANSLATE.PLAY[config.LANG]}</button>
                        <Link href={item.permalink}>
                          <a className={css.readMore}>{TRANSLATE.MORE[config.LANG]}</a>
                        </Link>
                    </div>
                </div>
           </div>
        </article>
    )
  }