import css from './style.module.css'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import MobileContent from './mobileView'
export default function Content({text}) {
    const [content, setContent] = useState(text)
    const commonState = useSelector(state => {
        const { commonReducer } = state
        return commonReducer
    })

    function createMarkup(content) { 
        return {__html: content.map(item => {
            return `<section class='${item.value_3}'>
                ${item.value_1}
                <div>
                ${item.value_2}
                </div>
            </section>`
        }).join('')} 
    }
    return (
        <>
        {
            text.length ? 
                <section className={css.section}>
                <article>
                    {
                        commonState.device !== '' 
                        ? commonState.device === 'mobile'
                            ? <MobileContent posts={text} />
                            : <article className={css.cms}>
                                <div className='container' 
                                 dangerouslySetInnerHTML={createMarkup(text)}
                                ></div>
                              </article> 
                        : null
                    }
                </article>
               </section>
           : null
        }
        </>
    )
  }