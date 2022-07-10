import css from './style.module.css'
export default function CasinoCharacters({data}) {
    return (
        <section className={css.section}>
            <div className='container'>
                <h2>Характеристики казино</h2>
                {
                    data.slot_category.length ? 
                    <div className={css.row}>
                        <div className={css.left}>Категории автоматов</div>
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
                        <div className={css.left}>Производители автоматов</div>
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
                        <div className={css.left}>Методы оплаты</div>
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
                        <div className={css.left}>Методы выплат</div>
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
                        <div className={css.left}>Игровые валюты</div>
                        <div className={css.right}>
                            {
                                data.exchange.map((item, index) => <span className={css.charactersItemTransparent} key={index}>{item.value_1}</span>)
                            }
                        </div>
                    </div>
                    : null
                }
            </div>
        </section>
    )
  }