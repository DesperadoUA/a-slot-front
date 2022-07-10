import css from './style.module.css'
import GameCard from './card'
export default function GameLoop() {
    return (
        <section className={css.section}>
            <div className='container'>
                <h2 className={css.ttl}>Игры</h2>
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
                    <button className={css.button_load}>Загрузить еще</button>
                </div>
            </div>
        </section>
    )
  }