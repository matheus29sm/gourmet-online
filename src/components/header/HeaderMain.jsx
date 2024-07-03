import './HeaderMain.css';
import logo from '../../img/icons/logo/GO_logo2.png';
import search from '../../img/icons/search.svg'
import HeaderContainer from '../../containers/header/HeaderContainer';


const HeaderMain = () =>{
    return (
            <div className="headerMain">
            <HeaderContainer>
                <div className='headerMainContent'>
                    <div className='menuLogo'>
                        <img src={logo} alt="logo" className="logo"/>
                    </div>
                    <div className='menuAction'>
                        <div className='menuText'>
                        <ul>
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="/1">Entradas</a>
                            </li>
                            <li>
                                <a href="/1">Pratos Principais</a>
                            </li>
                            <li>
                                <a href="/1">Acompanhamentos</a>
                            </li>
                            <li>
                                <a href="/1">Bebidas</a>
                            </li>
                            <li>
                                <a href="/1">Sobremesas</a>
                            </li>
                        </ul>
                    </div>
                    <div className='menuSearch'>
                        <button className='search'> 
                            <img src={search} alt="search" />
                        </button>
                    </div>
                    </div>
                </div>
            </HeaderContainer>
            </div>
    )
};

export default HeaderMain;