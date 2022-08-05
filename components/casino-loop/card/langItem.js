import css from './style.module.css'
import React, { useState } from 'react'
export default function LangItem({item}) {
    return (
        <div className={css.exchangeItem}>
           {item}
        </div>
    )
  }