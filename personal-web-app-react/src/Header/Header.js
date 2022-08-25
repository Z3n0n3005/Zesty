import './Header.css';

function Header(header){
    return(
        <header className='Header'>
            <h1 className='Header-title'>{header.name}</h1>
        </header>
    )
}

export default Header;