import css from './style.module.css'
import TRANSLATE from '../../helpers/translate'
import LicenseItem from '../casino-loop/card/licenseItem'
import config from '../../config'
import Slider from './slider'
export default function VendorTop({data}) {
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
                            <div className={css.licenseWrapper}>
                                {
                                   data.licenses.map((itemLicense, index) => <LicenseItem item={itemLicense}  key={index} casinoItem={data} />)
                                }
                            </div>
                        </div>
                        <div className={css.card_row}>
                            <div className={css.subTtl}>{TRANSLATE['PROVIDER_AVAILABLE_IN_CASINO'][config.LANG]}</div>
                            <Slider posts={data.casinos} />
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
  }