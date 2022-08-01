import css from './style.module.css'
import React, { useState } from 'react'
export default function DescriptionItem({item}) {
    const [active, setActive] = useState(false)
    const classClose = active ? `${css.faq_close} rotate_180` : css.faq_close
    const classAnswer = active ? `${css.faq_answer} fadeIn` : css.faq_answer
    const classItem = active ? `${css.faq_answer_item} fadeIn` : css.faq_answer_item
    function createMarkup(value) { return {__html: value } }
    return (
        <div className={css.faq_row}>
            <div className={css.faq_question} onClick={()=> setActive(!active)}>
                <div  dangerouslySetInnerHTML={createMarkup(item.value_1)}></div>
                <span className={classClose}></span>
            </div>
            <div className={classAnswer}>
                <div className={classItem} dangerouslySetInnerHTML={createMarkup(item.value_2)}></div>
            </div>
        </div>
    )
  }