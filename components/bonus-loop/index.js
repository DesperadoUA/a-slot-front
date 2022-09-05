import casinoLoop from './style.module.css'
import BonusCard from './card'
export default function BonusLoop({posts}) {
    return (
        posts.length ? 
            <section className={casinoLoop.section}>
                <div className='container'>
                    <div className={casinoLoop.wrapper}>
                        {
                            posts.map((item, index) => <BonusCard item={item} key={index} />)
                        }
                    </div>
                </div>
            </section>
        : null
    )
  }