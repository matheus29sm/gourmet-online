import './HeaderContact.css';
import instagram from '../../img/icons/contact/instagram.svg';
import email from '../../img/icons/contact/email.svg';
import whatsapp from '../../img/icons/contact/whatsapp.svg';
import phone from '../../img/icons/contact/phone.svg';
import HeaderContainer from '../../containers/header/HeaderContainer';



const HeaderContact = () =>{
    return (
        <div className='headerContact'>
        <HeaderContainer>
        <div className='headerContactContent'>
            <h1 className='textContact'>
                Atendimento: Seg a Sex, 18h às 23h e Sáb e Dom, 12h às 23h.
                (79) 99999-9999 Faça Sua Reserva!
            </h1>
            <div className="contactImgs">
                <a href="https://www.instagram.com" target="_blank">
                    <img src={instagram} alt="instagram" className="instagram"/>
                </a>
                <a href="mailto:example@example.com" className="email" target="_blank">
                    <img src={email} alt="email" className="email"/>
                </a>
                <a href="https://wa.me/7999999999" target="_blank">
                    <img src={whatsapp} alt="whatsapp" className="whatsapp"/>
                </a>
                <a href="tel:+79999999999">
                    <img src={phone} alt="phone" className="phone"/>
                </a>
            </div>
        </div>
        </HeaderContainer>
        </div>
    )
};

export default HeaderContact;