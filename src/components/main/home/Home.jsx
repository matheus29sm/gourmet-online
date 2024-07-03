import './Home.css';
import 'antd/dist/reset.css';
import atencao from '../../../img/atencao.png';


import DishCarousel from '../../carousels/DishCarousel';
import RestaurantCarousel from '../../carousels/RestaurantCarousel';

const Home = () => {

  return (
    <div>
        <DishCarousel/>
        {/* Imagem de alerta */}
        <div className="alertaImageContainer">
          <img src={atencao} alt="Alerta" className="alertaImage" />
        </div>
        <div className='adressContent'>
            <h1 className='adressTitle'>
              <span>Restaurante</span>
              <span>Gourmet</span>
              <span>Online</span>
            </h1>
            <RestaurantCarousel/>
            <div className="adressText">
              <h2>Endereço:</h2>
              <p>Rua: Avenida das Delícias, 123;</p>
              <p>Bairro: Bairro Saboroso;</p>
              <p>Cidade: Cidade dos Sabores;</p>
              <p>CEP: 12345-678;</p>
              <p>Telefone: (99) 99999-9999;</p>
            </div>
        </div>
    </div>
  );
};

export default Home;
