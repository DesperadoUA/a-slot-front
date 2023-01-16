import css from './style.module.css'
export default function Item({item}) {
    return (
       <div className={css.item}>
            <div className={css.partLeft}>
                <img src={item.src} className={css.partLeftImg} />
            </div>
            <div className={css.partRight}>
                <div className={css.partRightContainer}>
                    { item.value.map((itemValue, indexValue) => <div className={css.listItem} key={indexValue}>{itemValue}</div> ) }
                </div>
            </div>
       </div>
    )
  }