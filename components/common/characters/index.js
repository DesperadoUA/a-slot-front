import css from './style.module.css'
import Adapters from './adapters'
export default function Characters({data, adapter = 'default', title = ''}) {
    const currentData = Adapters[adapter](data)
    return (
        currentData.length 
        ?   <section className={css.section}>
                <div className='container'>
                    { title ? <h2>{title}</h2> : null }
                    {
                        currentData.map((item, index) => {
                        return  <div className={css.row} key={index}>
                                    <div className={css.left}>{item.value_1}</div>
                                    <div className={css.right}>
                                        {
                                            item.value_2.map((itemCharacters, indexCharacters) => <span className={css.charactersItem} 
                                                key={indexCharacters}>{itemCharacters}
                                            </span>)
                                        }
                                    </div>
                                </div>
                        })
                    }
                </div>
            </section>
        :   null
    )
  }