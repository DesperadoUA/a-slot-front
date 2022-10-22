import css from './style.module.css'
import Adapters from './adapters'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import Helper from '../../../helpers'
export default function VendorSlider({posts, adapter = 'default'}) {
    const currentData = Adapters[adapter](posts)
    const NUMBER_SLIDER_ITEMS = {
        tablet: 6,
        desctop: 7,
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
        const diff = currentData.length - 1 + delta/DELTA < NUMBER_SLIDER_ITEMS[commonState.device] ? 0 : delta - DELTA
        setDelta(diff)
        setStyleSlider({
            transform: `translateX(${diff}px)`
        })
    }
    const deltaDecrement = () => {
        const diff = delta/DELTA === 0 ? - (currentData.length - NUMBER_SLIDER_ITEMS[commonState.device]) * DELTA : delta + DELTA
        setDelta(diff)
        setStyleSlider({
            transform: `translateX(${diff}px)`
        })
    } 
    const refAction = (item) => Helper.refActivate(item)

    return (
        <div className={css.container}>
            <div className={css.sliderWrapper}>
                <div className={css.sliderBox}>
                    <div className={css.sliderContainer}>
                        <div className={css.slider} style={styleSlider}>
                            {
                                currentData.map((item, index) => { 
                                    return <div className={css.sliderItem}  key={index}>
                                        <img src={item.thumbnail} onClick={()=>refAction(item)} />
                                    </div>
                                })
                            }
                        </div>
                    </div>
                    {
                        currentData.length > NUMBER_SLIDER_ITEMS[commonState.device] ? 
                        <>
                            <button className={css.leftBtn} onClick={deltaIncrement}></button>
                            <button className={css.rightBtn} onClick={deltaDecrement}></button>
                        </>
                        : null
                    }
                </div>
            </div>
        </div>
    )
  }