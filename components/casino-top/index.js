import css from './style.module.css'
import Helper from '../../helpers'
import TRANSLATE from '../../helpers/translate'
import config from '../../config'
import LicenseItem from '../casino-loop/card/licenseItem'
export default function CasinoTop({data}) {
    const refAction = (item) => Helper.refActivate(item) 
    return (
        <section className={css.section}>
            <div className='container'>
                <div>
                <div className={css.card}>
                    <div className={css.cardLeft}>
                        <img src={data.thumbnail} alt={data.title} width={138} height={100} />
                    </div>
                    <div className={css.cardRight}>
                        <div className={css.card_row}>
                            <h1>{data.h1}</h1>
                            <div className={css.licenseWrapper}>
                                {
                                   data.licenses.map((itemLicense, index) => <LicenseItem item={itemLicense}  key={index} casinoItem={data} />)
                                }
                            </div>
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