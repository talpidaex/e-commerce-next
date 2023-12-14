'use client'

import { useState } from "react"
import "./imageSlider.scss";
import Image from "next/image";

export default function ImageSlider({ slides }: { slides: any }) {

    const [current, setCurrent] = useState(0)

    function handleSelectImage(index: number) {
        setCurrent(index)
    }

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <section className='slider'>
            {slides.map((slide, index) => {
                return (
                    <div
                        className={index === current ? 'slide active' : 'slide'}
                        key={index}
                    >
                        {index === current && (
                            <Image width={892} height={344} src={slide.image} alt='travel image' className='image' />
                        )}
                    </div>
                );
            })}
            <div className="icon-container">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        className={`dot ${index === current ? 'fill' : ''}`}
                        onClick={(e) => handleSelectImage(index)}
                    />
                ))}
            </div>

        </section>
    )

}