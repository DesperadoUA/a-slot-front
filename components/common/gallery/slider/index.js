import css from './style.module.css'
import Adapters from './adapters'
import { useState } from 'react'
import { useSelector } from 'react-redux'

export default function GallerySlider({data, adapter = 'default'}) {
    const currentData = Adapters[adapter](data)
    const NUMBER_SLIDER_ITEMS = {
        tablet: 1,
        desctop: 1,
        mobile: 1
    }
    const DELTA = 880
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

    return (
        <div className={css.container}>
            <div className={css.sliderWrapper}>
                <div className={css.sliderBox}>
                    <div className={css.sliderContainer}>
                        <div className={css.slider} style={styleSlider}>
                            {
                                currentData.map((item, index) => { 
                                    return <div className={css.sliderItem}  key={index}>
                                        <img src={item.src}  />
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