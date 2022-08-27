import React, { useEffect } from 'react'
import { useRouter } from "next/router";
import header from './style.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { setSettings } from './../../redux/actions/settings'
import { setDevice } from './../../redux/actions/common'
import { useDispatch, useSelector } from 'react-redux'
import Search from './search'

export default function Header() {
    const pathParams = useRouter()
    const dispatch = useDispatch()
    const state = useSelector(state => {
        const { settingsReducer } = state
        if(pathParams.route === '/game') {
            const posts = settingsReducer.settings.filter(item => item.key === 'game_menu')
            return posts.length ? posts[0].value : []
        }
        else if(pathParams.route.startsWith('/vendor')) {
            const posts = settingsReducer.settings.filter(item => item.key === 'game_menu')
            return posts.length ? posts[0].value : []
        }
        else if(pathParams.route === '/bonus') {
            const posts = settingsReducer.settings.filter(item => item.key === 'bonus_menu')
            return posts.length ? posts[0].value : []
        }
        else {
            const posts = settingsReducer.settings.filter(item => item.key === 'default_menu')
            return posts.length ? posts[0].value : []
        }
     })
    const commonState = useSelector(state => {
        const { commonReducer } = state
        return commonReducer
    })
    useEffect(()=>{
        if(!state.length) dispatch(setSettings())
        if(!commonState.device) dispatch(setDevice())
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
                            <Search />
                        </div>
                    </nav>
                </div>
                <div className={header.user}>
                    <Image src='/img/man.svg' alt="man" width="30" height="30"/>
                </div>
            </div>
        </header>
    )
  }