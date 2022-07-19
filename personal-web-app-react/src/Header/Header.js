import './Header.css';
import Navigation from './Navigation/Navigation';

function Header(){
    return(
        <header className='Header'>
            <Navigation />
            <h1 className='Header-title'>Zesty 🍋</h1>
        </header>
    )
}

export default Header;