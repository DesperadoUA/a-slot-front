import css from './style.module.css'
import React, { useState } from 'react'
import FaqItem from './item'
export default function Faq(props) {
    const [posts, setPosts] = useState(props.posts || [])
    return (
            posts.length 
            ? <section className={css.section} itemScope itemType='https://schema.org/FAQPage'>
                  <div className="container">
                    {
                      posts.map((item, index) => <FaqItem item={item} key={index} />)
                    }     
                  </div>
              </section>
            : null
    )
  }