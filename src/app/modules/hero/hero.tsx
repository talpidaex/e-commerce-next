import categoriesData from '../categories/data';
import { sliderImageData } from '../Slider/sliderImageData';
import Categories from '../categories/categories';
import ImageSlider from '../Slider/ImageSlider';
import './hero.scss';

export default function Hero() {
    return (
        <div className='hero-container'>
            <div className='hero-categories-container'>
                <Categories categories={categoriesData} />
            </div>
            <div className='hero-carousel-container'>
                <ImageSlider slides={sliderImageData} />
            </div>
        </div>
    )

}