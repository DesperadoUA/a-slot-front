import css from './style.module.css'
import React, { useState } from 'react'
export default function FaqItem({item}) {
    const [active, setActive] = useState(false)
    const classClose = active ? `${css.faq_close} rotate_180` : css.faq_close
    const classAnswer = active ? `${css.faq_answer} fadeIn` : css.faq_answer
    const classItem = active ? `${css.faq_answer_item} fadeIn` : css.faq_answer_item
    return (
        <div className={css.faq_row}
                itemScope
                itemProp='mainEntity'
                itemType='https://schema.org/Question'
            >
            <div className={css.faq_question} onClick={()=> setActive(!active)}>
                <span itemProp='name'>{item.value_1}</span>
                <span className={classClose}></span>
            </div>
            <div className={classAnswer}
                itemScope
                itemProp='acceptedAnswer'
                itemType='https://schema.org/Answer'>
                <span itemProp='text' className={classItem}>{item.value_2}</span>
            </div>
        </div>
    )
  }