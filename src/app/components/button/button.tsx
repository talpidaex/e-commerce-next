'use client'
import { Button } from './button.define'

export default function Button({ type, label, onClick, bgColor, color }: Button) {

    return (
        <button
            className={`${bgColor} ${color}`}
            type={type}
            onClick={onClick}>
            {label}
        </button >
    )

}


