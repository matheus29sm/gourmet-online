import { useRef } from 'react';
import './DishCarousel.css';
import { Carousel, Button } from 'antd';
import 'antd/dist/reset.css';
import prato1 from '../../img/dishes/file.jpg';
import prato2 from '../../img/dishes/bruschetta.jpg';
import prato3 from '../../img/dishes/vinhotinto.jpg';
import prato4 from '../../img/dishes/salmao.jpg';
import prato5 from '../../img/dishes/chesscake.jpg';
import prato6 from '../../img/dishes/carpaccio.jpg';
import prato7 from '../../img/dishes/risotocamarao.jpg';
import prato8 from '../../img/dishes/laranja.jpg';
import prato9 from '../../img/dishes/petitgateau.jpg';

const DishCarousel = () => {
  const carouselRef = useRef();

  const next = () => {
    carouselRef.current.next();
  };

  const prev = () => {
    carouselRef.current.prev();
  };

  return (
    <div>
        <Carousel
          ref={carouselRef}
          autoplay
          slidesToShow={3}
          slidesToScroll={1}
          className="carouselDishesContent"
        >
          <div>
            <img src={prato1} alt="Img1" className="carouselDishesImage" />
          </div>
          <div>
            <img src={prato2} alt="Img2" className="carouselDishesImage" />
          </div>
          <div>
            <img src={prato3} alt="Img3" className="carouselDishesImage" />
          </div>
          <div>
            <img src={prato4} alt="Img4" className="carouselDishesImage" />
          </div>
          <div>
            <img src={prato5} alt="Img5" className="carouselDishesImage" />
          </div>
          <div>
            <img src={prato6} alt="Img6" className="carouselDishesImage" />
          </div>
          <div>
            <img src={prato7} alt="Img7" className="carouselDishesImage" />
          </div>
          <div>
            <img src={prato8} alt="Img8" className="carouselDishesImage" />
          </div>
          <div>
            <img src={prato9} alt="Img9" className="carouselDishesImage" />
          </div>
        </Carousel>
        <div className="buttonDishesContainer">
          <Button type="text"  onClick={prev} className="navButtonDishes">
            {'<'}
          </Button>
          <Button type="text" textHoverBg onClick={next} className="navButtonDishes">
            {'>'}
          </Button>
        </div>
    </div>
  );
};

export default DishCarousel;
