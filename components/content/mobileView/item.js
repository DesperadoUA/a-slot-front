import css from './style.module.css'
import React, { useState } from 'react'
export default function MobileItemContent({item}) {
    const [active, setActive] = useState(false)
    const classClose = active ? `${css.faq_close} rotate_180` : css.faq_close
    const classAnswer = active ? `${css.faq_answer} fadeIn` : css.faq_answer
    const classItem = active ? `${css.faq_answer_item} fadeIn` : css.faq_answer_item
    function createMarkup(content) { return {__html: content} }
    const wrapperClass = `${css.faq_row} ${item.value_3}`
    return (
        <div className={wrapperClass}>
            <div className={css.faq_question} onClick={()=> setActive(!active)}>
                <div dangerouslySetInnerHTML={createMarkup(item.value_1)}></div>
                <span className={classClose}></span>
            </div>
            <div className={classAnswer}>
                <div itemProp='text' 
                     className={classItem} 
                     dangerouslySetInnerHTML={createMarkup(item.value_2)}>
                </div>
            </div>
        </div>
    )
  }