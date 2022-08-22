// import Header from '../../Header/Header';
import './Home.css';
import Bomberman from './Projects/Bomberman';

const Home = () => {
    return (
        <div className='Home'>
            <h2 className='center_text heading_homepage'>A Landing Page for my Projects</h2>
            <p className='center_text heading_subtext'>Showcasing projects chronologically in a web format</p>

            <Bomberman/>
                
        </div>
    )
}

export default Home;