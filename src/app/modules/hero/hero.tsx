import Carousel from '../carousel/carousel';
import Categories from '../categories/categories';
import categoriesData from '../categories/data';
import './hero.scss';

export default function Hero() {
    return (
        <div className='hero-container'>
            <div className='hero-categories-container'>
                <Categories categories={categoriesData} />
            </div>
            <div className='hero-carousel-container'>
                <Carousel />
            </div>
        </div>
    )

}