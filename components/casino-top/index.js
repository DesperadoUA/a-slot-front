import css from './style.module.css'
import Helper from '../../helpers'
import TRANSLATE from '../../helpers/translate'
import config from '../../config'
import LicenseItem from '../casino-loop/card/licenseItem'
import RatingItem from './ratingItem'
export default function CasinoTop({data}) {
    const refAction = (item) => Helper.refActivate(item) 
    return (
        <section className={css.section}>
            <div className='container'>
                <div>
                <div className={css.card}>
                    <div className={css.cardLeft}>
                        <img src={data.thumbnail} alt={data.title} width={218} height={160} />
                    </div>
                    <div className={css.cardRight}>
                        <div className={css.card_row}>
                            <div className={css.cardTtl}>{data.title}</div>
                            <div className={css.licenseWrapper}>
                                {
                                   data.licenses.map((itemLicense, index) => <LicenseItem item={itemLicense}  key={index} casinoItem={data} />)
                                }
                            </div>
                        </div>
                        <div className={css.ratingWrapper}>
                            <RatingItem rating={data.convenience} label={TRANSLATE['CONVENIENCE'][config.LANG]} />
                            <RatingItem rating={data.replenishment} label={TRANSLATE['DEPOSIT/WITHDRAWAL'][config.LANG]} />
                            <RatingItem rating={data.support} label={TRANSLATE['SUPPORT'][config.LANG]} />
                            <RatingItem rating={data.actions} label={TRANSLATE['GAMES'][config.LANG]} />
                        </div>
                        <button className={css.btn} type='button' onClick={()=>refAction(data)}>
                            {TRANSLATE.GO_TO[config.LANG]}
                        </button>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
  }