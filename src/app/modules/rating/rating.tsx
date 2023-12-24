'use client'
import { useEffect, useState } from 'react';
import { Star } from '@styled-icons/boxicons-solid/Star';
import { StarHalf } from '@styled-icons/boxicons-solid/StarHalf';
import { Star as StarEmpty } from '@styled-icons/boxicons-regular/Star';
import "./rating.scss"

export default function Rating({ average, count }: { average: number, count: number }) {

    const [starCount, setStarCount] = useState({
        full: 0,
        half: 0,
        empty: 0
    })

    useEffect(() => {
        setStarCount(prev => ({ ...prev, full: Math.floor(average) }))
        if (average - Math.floor(average) >= 0.5) {
            setStarCount(prev => ({ ...prev, half: 1 }))
        } else {
            setStarCount(prev => ({ ...prev, half: 0 }))
        }
        setStarCount((prev) => {
            return {
                ...prev,
                empty: 5 - (prev.full + prev.half)
            }
        })

    }, [average])

    return (
        <div className='rating'>
            <div className='star-container'>
                {Array.from({ length: starCount.full }, ((_, key) => (<Star fill='#FFAD33' key={`fill-star-${key}`} width={20} height={20} />)))}
                {Array.from({ length: starCount.half }, ((_, key) => (<StarHalf key={`half-star-${key}`} fill='#FFAD33' width={20} height={20} />)))}
                {Array.from({ length: starCount.empty }, ((_, key) => (<StarEmpty key={`empty-star-${key}`} fill='#7D8184' width={20} height={20} />)))}
            </div>
            <span className='count'>
                ({count})
            </span>
        </div>
    )

}