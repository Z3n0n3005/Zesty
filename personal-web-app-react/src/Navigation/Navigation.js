import  './Navigation.css';
import {Link} from 'react-router-dom';

function Navigation (){
    return (
        <div>
            <nav className='Navigation'>
                <ul className='NavList'>
                    <li><Link to="/home">🍋</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
                
            </nav>
        </div>
    )
}

export default Navigation;