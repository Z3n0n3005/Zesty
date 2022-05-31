import './Body.css';
import Sidebar from './Sidebar/Sidebar';
import Content from './Content/Content';

function Body () {
    return (
        <div className='Body'>
            <Content/>
            <aside>
                <Sidebar/>
            </aside>
        </div>
    )
}

export default Body;