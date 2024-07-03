import { useRef } from 'react';
import './RestaurantCarousel.css';
import { Carousel, Button } from 'antd';
import 'antd/dist/reset.css';
import entrada from '../../img/restaurant/Entrada.jpg';
import restaurante1 from '../../img/restaurant/restaurante1.jpg';
import restaurante2 from '../../img/restaurant/restaurante2.jpg';
import restaurante3 from '../../img/restaurant/restaurante3.jpg';

const RestaurantCarousel = () => {
  const carouselRef = useRef();

  const next = () => {
    carouselRef.current.next();
  };

  const prev = () => {
    carouselRef.current.prev();
  };

  return (
    <div className='carouselRestaurant'>
        <Carousel
            ref={carouselRef}
            className="carouselRestauranteContent">
            <div>
                <img src={entrada} alt="Img1" className="carouselRestauranteImage" />
            </div>
            <div>
                <img src={restaurante1} alt="Img2" className="carouselRestauranteImage" />
            </div>
            <div>
                <img src={restaurante2} alt="Img3" className="carouselRestauranteImage" />
            </div>
            <div>
                <img src={restaurante3} alt="Img4" className="carouselRestauranteImage" />
            </div>
        </Carousel>
        <div className="buttonRestaurantContainer">
          <Button type="text"  onClick={prev} className="navButtonRestaurant">
            {'<'}
          </Button>
          <Button type="text" textHoverBg onClick={next} className="navButtonRestaurant">
            {'>'}
          </Button>
        </div>
    </div>
  );
};

export default RestaurantCarousel;
