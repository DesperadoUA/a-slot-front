import css from './style.module.css'
import config from '../../config'
import TRANSLATE from '../../helpers/translate'
export default function BonusCharacters({data}) {
    return (
        data.length 
        ?   <section className={css.section}>
                <div className='container'>
                    <h2>{TRANSLATE.BONUS_CHARACTERISTICS[config.LANG]}</h2>
                    {
                        data.map((item, index) => {
                        return  <div className={css.row} key={index}>
                                    <div className={css.left}>{item.value}</div>
                                    <div className={css.right}>
                                        {
                                            item.child.map((itemChild, indexChild) => <span className={css.charactersItem} key={indexChild}>{itemChild.value}</span>)
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