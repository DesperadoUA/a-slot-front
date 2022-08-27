import css from './style.module.css'
import React, { useState } from 'react'
import Helper from '../../../helpers'
export default function RatingItem({rating, label}) {
    const {letter, classStyle} = Helper.ratig(rating)
    const stroke = `${rating}, 100`
    const wrapperClass = `${css.circleRating} ${classStyle}`
    return (
        <div className={css.ratingItem} >
            <div className={wrapperClass}>
                    <svg viewBox="0 0 36 36" className="circle-rating__chart" width={36} height={36}>
                        <path className={css.circleRatingCircleBg} 
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                        <path className='circleRatingCircle'
                            strokeDasharray={stroke}
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                    </svg>
                <div className='circleRatingPercentage'>{letter}</div>
            </div>
            <div className={css.ratingLabel}>
                {label}
            </div>
        </div>
    )
  }