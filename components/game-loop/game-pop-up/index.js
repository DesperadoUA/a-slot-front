import css from './style.module.css'
import Link from 'next/link'
import config from '../../../config'
import TRANSLATE from '../../../helpers/translate'
import { useState } from 'react'
import { useSelector } from 'react-redux'
export default function GamePopUp({change, img, title, specialRef, vendor}) {
    const NUMBER_SLIDER_ITEMS = {
        tablet: 6,
        desctop: 8,
        mobile: 4
    }
    const DELTA = 70
    const [delta, setDelta] = useState(0)
    const [styleSlider, setStyleSlider] = useState({
        transform: `translateX(${delta}px)`
    })
    const commonState = useSelector(state => {
        const { commonReducer } = state
        return commonReducer
    })
    const deltaIncrement = () => {
        const diff = specialRef.length - 1 + delta/DELTA < NUMBER_SLIDER_ITEMS[commonState.device] ? 0 : delta - DELTA
        setDelta(diff)
        setStyleSlider({
            transform: `translateX(${diff}px)`
        })
    }
    const deltaDecrement = () => {
        const diff = delta/DELTA === 0 ? -(specialRef.length - NUMBER_SLIDER_ITEMS[commonState.device]) * DELTA : delta + DELTA
        setDelta(diff)
        setStyleSlider({
            transform: `translateX(${diff}px)`
        })
    } 

    return (
        <div className={css.popUp}>
            <div className={css.popUpContainer}>
                <div className={css.ttl}>{title}</div>
                <div className={css.ttlVendor}>{vendor.title}</div>
                <div className={css.thumbnailWrapper}>
                    <div className={css.imgWrapper}>
                        <img src={img} width={210} height={232} className={css.thumbnail} />
                    </div>
                </div>
                {
                    specialRef.length ?
                        <div className={css.selectCasino}>{TRANSLATE['SELECT_CASINO'][config.LANG]}</div>
                        : null
                }
                <div className={css.sliderWrapper}>
                    <div className={css.sliderBox}>
                        <div className={css.sliderContainer}>
                            <div className={css.slider} style={styleSlider}>
                                    {
                                        specialRef.map((itemRef, indexRef) => { 
                                            return <div className={css.sliderItem}  key={indexRef}>
                                                <img src={itemRef.src} />
                                            </div>
                                        })
                                    }
                            </div>
                        </div>
                        {
                            specialRef.length > NUMBER_SLIDER_ITEMS[commonState.device] ? 
                            <>
                                <button className={css.leftBtn} onClick={deltaIncrement}></button>
                                <button className={css.rightBtn} onClick={deltaDecrement}></button>
                            </>
                            : null
                        }
                    </div>
                </div>
                <div className={css.close} onClick={()=>change(false)}></div>
            </div>
        </div>
    )
  }