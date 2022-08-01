import css from './style.module.css'
import React, { useEffect } from 'react'
import DescriptionItem from './item'
import { setSettings } from './../../redux/actions/settings'
import { useDispatch, useSelector } from 'react-redux'
export default function Description() {
    const dispatch = useDispatch()
    const posts = useSelector(state => {
      const { settingsReducer } = state
      const posts = settingsReducer.settings.filter(item => item.key === 'description')
      return posts.length ? posts[0].value : []
    })
    useEffect(()=>{
      if(!posts.length) dispatch(setSettings())
    }, [])
    return (
            posts.length 
            ? <section className={css.section}>
                  <div className="container">
                    {
                      posts.map((item, index) => <DescriptionItem item={item} key={index} />)
                    }     
                  </div>
              </section>
            : null
    )
  }