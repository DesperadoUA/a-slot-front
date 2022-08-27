import css from './style.module.css'
export default function h1({h1}) {
    return (
        <section className={css.section}>
            <div className='container'>
                <h1 className={css.ttl}>{h1}</h1>
            </div>
        </section>
    )
  }