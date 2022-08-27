import css from './style.module.css'
import React, { useState } from 'react'
import FaqItem from './item'
export default function MobileContent(props) {
    const [posts, setPosts] = useState(props.posts || [])
    return (
            posts.length 
            ? <section className={css.section}>
                  <div className="container">
                    {
                      posts.map((item, index) => <FaqItem item={item} key={index} />)
                    }     
                  </div>
              </section>
            : null
    )
  }