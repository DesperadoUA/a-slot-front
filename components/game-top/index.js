import css from './style.module.css'
import TRANSLATE from '../../helpers/translate'
import config from '../../config'
import Slider from '../vendor-top/slider'
export default function GameTop({data}) {
    return (
        <section className={css.section}>
            <div className='container'>
                <div>
                <div className={css.card}>
                    <div className={css.cardLeft}>
                        <img src={data.thumbnail} alt={data.title} width={218} height={135} />
                    </div>
                    <div className={css.cardRight}>
                        <div className={css.card_row}>
                            <div className={css.cardTtl}>{data.title}</div>
                        </div>
                        <div className={css.card_row}>
                            <div className={css.subTtl}>{TRANSLATE['CASINO_WITH_GAME'][config.LANG]}</div>
                            <Slider posts={data.special_ref} adapter='gameAdapter' />
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
  }