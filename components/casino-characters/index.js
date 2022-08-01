import css from './style.module.css'
import config from '../../config'
import TRANSLATE from '../../helpers/translate'
import ExchangeItem from '../casino-loop/card/exchangeItem'
export default function CasinoCharacters({data}) {
    return (
        <section className={css.section}>
            <div className='container'>
                <h2>{TRANSLATE.CASINO_CHARACTERISTICS[config.LANG]}</h2>
                {
                    data.slot_category.length ? 
                    <div className={css.row}>
                        <div className={css.left}>{TRANSLATE.CATEGORIES_MACHINES[config.LANG]}</div>
                        <div className={css.right}>
                            {
                                data.slot_category.map((item, index) => <span className={css.charactersItem} key={index}>{item.value_1}</span>)
                            }
                        </div>
                    </div>
                    : null
                }
                {
                    data.vendors.length ?
                    <div className={css.row}>
                        <div className={css.left}>{TRANSLATE.MACHINE_MANUFACTURERS[config.LANG]}</div>
                        <div className={css.right}>
                            {
                                data.vendors.map((item, index) => <span className={css.charactersItem} key={index}>{item.title}</span>)
                            }
                        </div>
                    </div>
                    : null
                }
                {
                    data.payment_methods.length ?
                    <div className={css.row}>
                        <div className={css.left}>{TRANSLATE.PAYMENT_METHODS[config.LANG]}</div>
                        <div className={css.right}>
                            {
                                data.payment_methods.map((item, index) => <span className={css.charactersItem} key={index}>{item.value_1}</span>)
                            }
                        </div>
                    </div>
                    : null
                }
                {
                    data.payment_out_methods.length ?
                    <div className={css.row}>
                        <div className={css.left}>{TRANSLATE.PAYMENT_OUT_METHODS[config.LANG]}</div>
                        <div className={css.right}>
                            {
                                data.payment_out_methods.map((item, index) => <span className={css.charactersItemGreen} key={index}>{item.value_1}</span>)
                            }
                        </div>
                    </div>
                    : null
                }
                {
                    data.exchange.length ?
                    <div className={css.row}>
                        <div className={css.left}>{TRANSLATE.GAME_CURRENCIES[config.LANG]}</div>
                        <div className={css.right}>
                            {
                                data.exchange.map((itemExchange, index) => <ExchangeItem item={itemExchange} key={index}/>)
                            }
                        </div>
                    </div>
                    : null
                }
            </div>
        </section>
    )
  }