import casinoLoop from './style.module.css'
import Link from 'next/link'
import CasinoCard from './card'
export default function CasinoLoop({posts}) {
    return (
        posts.length ? 
            <section className={casinoLoop.section}>
                <div className='container'>
                    <h2 className={casinoLoop.ttl}>Обзор онлайн казино</h2>
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