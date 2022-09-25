import { useState } from 'react'
import css from './style.module.css'
import GameCard from './card'
import config from '../../config'
import TRANSLATE from '../../helpers/translate'
export default function GameLoop({posts}) {
    const NUMBER_POSTS_ON_PAGE = 16
    const [currentPage, setCurrentPage] = useState(1)
    const incrementPage = () => {
        setCurrentPage(++currentPage)
    }
    return (
        <section className={css.section}>
            <div className='container'>
                <div className={css.wrapper}>
                {
                    posts.slice(0, NUMBER_POSTS_ON_PAGE * currentPage)
                         .map((item, index) => <GameCard item={item} key={index} />)
                }
                </div>
                {
                    posts.length > NUMBER_POSTS_ON_PAGE * currentPage
                    ?
                    <div className={css.button_wrapper} onClick={incrementPage} >
                      <button className={css.button_load}>{TRANSLATE.LOAD_MORE[config.LANG]}</button>
                    </div>
                    : null
                }
            </div>
        </section>
    )
  }