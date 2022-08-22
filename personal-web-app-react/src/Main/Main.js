import './Main.css';
import {Outlet} from 'react-router-dom';


function Body () {
    return (
        <main>
            <Outlet/>
        </main>
        
    )
}

export default Body;
