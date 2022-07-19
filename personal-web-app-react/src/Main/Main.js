// import Header from '../Header/Header';
import './Main.css';
// import Sidebar from './Sidebar/Sidebar';
// import Home from './Content/Home';
import {Outlet} from 'react-router-dom';


function Body () {
    return (
        <main>
            <h1>Est et odit aut qui adipisci at sit. Cum consequatur assumenda qui minus voluptas quam fugiat. Minus voluptas perferendis suscipit temporibus voluptatum cumque. 
            Id maxime nobis nihil enim. Molestias nesciunt vero tempora. Quidem eum placeat eos.
            Deleniti quo sapiente ab hic numquam enim. Dolores maiores dolorem culpa officia dolore qui rerum. At saepe quia unde fugit dolor cumque inventore. Eum ipsam et porro.
            Ipsum aut voluptas et nostrum. Quibusdam laborum voluptate itaque ab praesentium voluptate reprehenderit. Dolor sunt commodi iusto reiciendis consectetur. Omnis voluptas non vitae laudantium qui qui.
            Maxime enim consequatur inventore repellendus. Quia quod aut qui voluptatem beatae. Possimus itaque dicta cumque dolorem magni nulla.
            </h1>
            <Outlet/>
        </main>
        
    )
}

export default Body;
