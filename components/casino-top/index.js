import css from './style.module.css'
import Helper from '../../helpers'
export default function CasinoTop({data}) {
    const refAction = (item) => Helper.refActivate(item) 
    return (
        <section className={css.section}>
            <div className='container'>
                <div className={css.card}>
                    <div className={css.cardLeft}>
                        <img src={data.thumbnail} alt={data.title} width={138} height={100} />
                    </div>
                    <div className={css.cardRight}>
                        <div className={css.card_row}>
                            <h1>{data.h1}</h1>
                            <div className={css.licenseWrapper}>
                                {
                                    data.licenses.map((item, index) => <img src={`/img/${item}.png`} className={css.license}  key={index} />)
                                }
                            </div>
                        </div>
                        <button className={css.btn} type='button' onClick={()=>refAction(data)}>Перейти</button>
                    </div>
                </div>
            </div>
        </section>
    )
  }