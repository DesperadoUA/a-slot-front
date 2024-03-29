import casinoLoop from './style.module.css'
import CasinoCard from './card'
export default function CasinoLoop({posts}) {
    return (
        posts.length ? 
            <section className={casinoLoop.section}>
                <div className='container'>
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