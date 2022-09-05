import css from './style.module.css'
import GameCard from './card'
import config from '../../config'
import TRANSLATE from '../../helpers/translate'
export default function GameLoop() {
    return (
        <section className={css.section}>
            <div className='container'>
                <div className={css.wrapper}>
                   <GameCard />
                   <GameCard />
                   <GameCard />
                   <GameCard />
                   <GameCard />
                   <GameCard />
                   <GameCard />
                   <GameCard />
                   <GameCard />
                   <GameCard />
                   <GameCard />
                </div>
                <div className={css.button_wrapper}>
                    <button className={css.button_load}>{TRANSLATE.LOAD_MORE[config.LANG]}</button>
                </div>
            </div>
        </section>
    )
  }