import casinoLoop from './style.module.css'
import CasinoCard from './card'
import config from './../../config'
import TRANSLATE from './../../helpers/translate'
export default function CasinoLoop({posts}) {
    return (
        posts.length ? 
            <section className={casinoLoop.section}>
                <div className='container'>
                    <h2 className={casinoLoop.ttl}>{TRANSLATE.ONLINE_CASINO_REVIEW[config.LANG]}</h2>
                    <div className={casinoLoop.wrapper}>
                        {
                            posts.map((item, index) => <CasinoCard item={item} key={index} />)
                        }
                    </div>
                </div>
            </section>
        : null
    )
  }