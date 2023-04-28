// import Header from '../../Header/Header';
import './Home.css';

import ProjectArticle from '../../template/ProjectArticle';

const Home = () => {
    return (
        <div className='Home'>
            <h2 className='center_text heading_homepage'>A Landing Page for my Projects</h2>
            <p className='center_text heading_subtext'>Showcasing projects chronologically in a web format</p>

            <ProjectArticle name="Aramoolah" descript="A personal finance Android application, which was written in java and utilize the MVVM architectural design pattern as the structure of the application." pos="right" img='https://cdn-icons-png.flaticon.com/512/2140/2140382.png' alt="Aramoolah.png" link="/home/aramoolah"/>

            <ProjectArticle name="Zesty" descript="A minimalistic online landing page for future projects." pos="left" img='icon/zesty.png' alt='zesty.png' link='/home/zesty'/>

            <ProjectArticle name="Bomberman" descript="A simple 2D game made in a team of 4. This is my first ever project which is why many mistakes and blunders have been made." pos="right" img='icon/bomberman.png' alt='bomberman.png' link='/home/bomberman'/>    
        </div>
    )
}

export default Home;