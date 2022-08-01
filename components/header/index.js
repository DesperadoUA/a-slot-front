import React, { useEffect } from 'react'
import { useRouter } from "next/router";
import header from './style.module.css'
import Link from 'next/link'
import { setSettings } from './../../redux/actions/settings'
import { useDispatch, useSelector } from 'react-redux'

export default function Header() {
    const pathParams = useRouter()
    const dispatch = useDispatch()
    const state = useSelector(state => {
        const { settingsReducer } = state
        switch(pathParams.route) {
            case '/casino': {
                const posts = settingsReducer.settings.filter(item => item.key === 'casino_menu')
                return posts.length ? posts[0].value : []
            } 
            case '/bonus': {
                const posts = settingsReducer.settings.filter(item => item.key === 'bonus_menu')
                return posts.length ? posts[0].value : []
            }
            default: {
                const posts = settingsReducer.settings.filter(item => item.key === 'default_menu')
                return posts.length ? posts[0].value : []
            }
        }
     })
    useEffect(()=>{
        if(!state.length) dispatch(setSettings())
    }, [])
    return (
        <header className={header.header}>
            <div className={`${header.container} container`}>
                <div className={header.nav}>
                    <nav className={header.menu_wrapper}>
                        <ul className={header.menu}>
                            {
                                state.map((item, index) => <li className={header.menu_item} key={index}>
                                                                <Link href={item.value_2}>
                                                                <a>{item.value_1}</a>
                                                                </Link>
                                                            </li>)
                            }
                        </ul>
                        <div className={header.search}>
                            <img src='/img/search.svg' alt="search"/>
                        </div>
                    </nav>
                </div>
                <div className={header.user}>
                    <img src='/img/man.svg' alt="man"/>
                </div>
            </div>
        </header>
    )
  }