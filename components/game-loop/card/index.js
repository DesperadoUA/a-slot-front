import css from './style.module.css'
import Link from 'next/link'
export default function GameCard() {
    return (
        <article className={css.item}>
           <div className={css.card_wrapper}>
            <Link href='/casino/example'> 
                <a>
                    <img src="/img/game.png" alt="alt" />
                </a>
            </Link>
           </div>
        </article>
    )
  }