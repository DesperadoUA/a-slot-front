import React, { useEffect, useState, useRef } from 'react'
import css from './style.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Builder from '../../../DAL'

export default function Search() {
    const [openState, setOpenState] = useState(false)
    const [searchResult, setSearchResult] = useState([])
    const changeState = (flag) => {
        setOpenState(flag)
        setSearchResult([])
    } 
    const searchRef = useRef()
    const DAL = new Builder()
    const handleKeyDown = async (event) => {
        if (event.key === 'Enter') {
            const response = await DAL.setPostType('pages')
                            .setUrlId('search')
                            .setData({
                                searchWord: searchRef.current.value
                            })
                            .setAction('get')
                            .get()
            setSearchResult(response.data.body.posts)
        }
      }
    return (
        <>
            <div className={css.searchContainer}>
                <Image src='/img/search.svg'
                       alt="search" 
                       width="20" 
                       height="20"
                       className={css.searchIcon}
                       onClick={()=>changeState(true)}
                       />
                {
                    openState ? 
                        <div className={css.searchWrapper}>
                           <input type='text' 
                                  placeholder='поиск' 
                                  className={css.searcInput}
                                  onKeyDown={handleKeyDown}
                                  ref={searchRef}
                            />
                           <button onClick={()=>changeState(false)} 
                                   className={css.closeBtn}
                           ></button>
                           {
                               searchResult.length
                               ? <div className={css.searchResultWrapper}>
                                {
                                    searchResult.map((item, index) =>  <div className={css.searchItem} key={index}>
                                        <img src={item.thumbnail} className={css.searchItemThumbnail} />
                                        <div className={css.searchItemTtl}>
                                            <Link href={item.permalink}>
                                                <a>{item.title}</a>
                                            </Link>    
                                        </div>
                                    </div>)
                                }
                                </div>
                               : null
                           }
                        </div>
                    : null
                }
            </div>
        </>
    )
  }