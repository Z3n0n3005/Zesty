// import Header from '../Header/Header';
import './Body.css';
// import Sidebar from './Sidebar/Sidebar';
// import Home from './Content/Home';
import {Outlet} from 'react-router-dom';


function Body () {
    return (
        <div>
            <Outlet/>
        </div>
        
    )
}

export default Body;
