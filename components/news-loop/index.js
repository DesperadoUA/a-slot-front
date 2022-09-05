import css from './style.module.css'
import Card from './card'
export default function NewsLoop({posts}) {
    return (
        posts.length ? 
            <section className={css.section}>
                <div className='container'>
                    <div className={css.wrapper}>
                        {
                            posts.map((item, index) => <Card item={item} key={index} />)
                        }
                    </div>
                </div>
            </section>
        : null
    )
  }