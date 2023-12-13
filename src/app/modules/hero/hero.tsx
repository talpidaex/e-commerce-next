import Carousel from '../Slider/ImageSlider';
import Categories from '../Categories/Categories';
import categoriesData from '../Categories/data';
import './hero.scss';
import ImageSlider from '../Slider/ImageSlider';
import { SliderData } from '../Slider/data';

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