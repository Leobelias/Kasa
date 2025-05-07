import Logo from './Logo/Logo.jsx';
import './header.scss'

function Header(){ 
    return (
    <div className='HeaderContainer'>
    <div className='header'>
          <div className='Logo-header'>
            <Logo />
          </div>

          <div className='Text-header'>
          <h2>Accueil</h2>
          <h3>A propos</h3>
          </div>
          
    </div>
    </div>
);

}


export default Header