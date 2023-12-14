import categoriesData from '../categories/data';
import './hero.scss';
import { SliderData } from '../slider/data';
import Categories from '../categories/categories';
import ImageSlider from '../slider/ImageSlider';

export default function Hero() {
    return (
        <div className='hero-container'>
            <div className='hero-categories-container'>
                <Categories categories={categoriesData} />
            </div>
            <div className='hero-carousel-container'>
                <ImageSlider slides={SliderData} />
            </div>
        </div>
    )

}