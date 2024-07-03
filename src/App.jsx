import './App.css';
import Footer from './components/footer/Footer';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderContact from './components/header/HeaderContact';
import HeaderMain from './components/header/HeaderMain';
import Main from './components/main/Main';
// import CadastrarEndereco from './components/pages/Cadastro';
// import EditarEndereco from './components/pages/Editar';
// import Home from './components/pages/Home';

function App() {
  return (
      <div className="app">
        <header className='header'>
        <HeaderContact />
        <HeaderMain />
        </header>
        <Main/>
        <Footer/>
      </div>
  );
}

export default App;
