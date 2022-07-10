import css from './style.module.css'
import React, { useState } from 'react'
export default function Content(props) {
    const [content, setContent] = useState(props.text)
    function createMarkup() { return {__html: content} }
    return (
        <section className={css.section}>
            <div className='container'>
                <article className={css.cms}
                         dangerouslySetInnerHTML={createMarkup()}
                ></article>
            </div>
        </section>
    )
  }