import css from './style.module.css'
import Helper from '../../helpers'
import TRANSLATE from '../../helpers/translate'
import config from '../../config'
export default function NewsTop({data}) {
    const refAction = (item) => Helper.refActivate(item) 
    return (
        <section className={css.section}>
            <div className='container'>
                <div>
                <div className={css.card}>
                    <div className={css.cardLeft}>
                        <img src={data.thumbnail} alt={data.title} width={160} height={100} />
                    </div>
                    <div className={css.cardRight}>
                        {
                            data.ref.length 
                            ? <button className={css.btn} type='button' onClick={()=>refAction(data)}>
                                {TRANSLATE.GO_TO[config.LANG]}
                              </button>
                            : null
                        }
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
  }