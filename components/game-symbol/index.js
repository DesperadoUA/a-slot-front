import css from './style.module.css'
import Adapters from './adapters'
import Item from './item'
export default function GameSymbol({data, adapter = 'default', title = ''}) {
    const currentData = Adapters[adapter](data)
    return (
        <>
        {
            currentData.length ?
            <section className={css.section}>
                <div className='container'>
                    { title ? <h2>{title}</h2> : null }
                    <div className={css.row}>
                        {
                          currentData.map((item, index) => <Item item={item} key={index} />)
                        }
                    </div>
                </div>
            </section>
            : null
        }
        </>
    )
  }