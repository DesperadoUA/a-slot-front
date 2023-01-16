import css from './style.module.css'
import Adapters from './adapters'
import Slider from './slider'
export default function Gallery({data, adapter = 'default', title = ''}) {
    const currentData = Adapters[adapter](data)
    return (
        <>
        {
            currentData.length ?
            <section className={css.section}>
                <div className='container'>
                    { title ? <h2>{title}</h2> : null }
                    <div className={css.row}>
                       <Slider data={currentData} />
                    </div>
                </div>
            </section>
            : null
        }
        </>
    )
  }