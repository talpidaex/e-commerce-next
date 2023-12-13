'use client'

import { useState } from "react"
import "./imageSlider.scss"
import { LeftArrow } from "@styled-icons/boxicons-regular/LeftArrow";
import { RightArrow } from "@styled-icons/boxicons-regular/RightArrow";

export default function ImageSlider({ slides }: { slides: any }) {

    const [current, setCurrent] = useState(0)

    const nextSlide = () => {
        setCurrent(current === slides.length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? slides.length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <section className='slider'>
            <LeftArrow className='left-arrow' onClick={prevSlide} width={30} height={30} />
            <RightArrow className='right-arrow' onClick={nextSlide} width={30} height={30} />
            {slides.map((slide, index) => {
                return (
                    <div
                        className={index === current ? 'slide active' : 'slide'}
                        key={index}
                    >
                        {index === current && (
                            <img src={slide.image} alt='travel image' className='image' />
                        )}
                    </div>
                );
            })}
        </section>
    )

}