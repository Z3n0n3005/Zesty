// import Header from '../../Header/Header';
import './Home.css';

import ProjectArticle from '../../template/ProjectArticle';

const Home = () => {
    return (
        <div className='Home'>
            <h2 className='center_text heading_homepage'>A Landing Page for my Projects</h2>
            <p className='center_text heading_subtext'>Showcasing projects chronologically in a web format</p>

            <ProjectArticle name="Zesty" descript="A minimalistic online landing page for future projects." pos="right" img='icon/zesty.png' alt='zesty.png' link='/home/zesty'/>

            <ProjectArticle name="Bomberman" descript="A simple 2D game made in a team of 4. This is my first ever project which is why many mistakes and blunders have been made." pos="left" img='icon/bomberman.png' alt='bomberman.png' link='/home/bomberman'/>    
        </div>
    )
}

export default Home;