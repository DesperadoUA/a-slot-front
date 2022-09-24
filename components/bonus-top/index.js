import css from './style.module.css'
import config from '../../config'
import TRANSLATE from '../../helpers/translate'
import Helper from '../../helpers'
export default function BonusTop({data}) {
    const refAction = (item) => Helper.refActivate(item)
    return (
        <>
        <section className={css.section}>
            <div className='container'>
                <div className={css.wrapper}>
                    <div className={css.item}>
                        <div className={css.card}>
                            <div className={css.left}>
                                <img src={data.casino.thumbnail} alt={data.title} width={150} height={96} />
                            </div>
                            <div className={css.right}>
                                <div className={css.itemTtl}>{data.title}</div>
                                <div className={css.ratingWrapper}>
                                    <div className={css.bonusValue}>
                                        {data.value}
                                    </div>
                                </div>
                                <div className={css.action}>
                                    <button className={css.goTo} onClick={()=>refAction(data)}>{TRANSLATE.GO_TO[config.LANG]}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
  }