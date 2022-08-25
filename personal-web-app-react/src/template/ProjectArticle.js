import { Link } from 'react-router-dom';
import './ProjectArticle.css'

const ProjectArticle = (obj) => {
    
    if(obj.pos === "left"){
        return (
            <article className='flex_container_left'>
                <div className='flex_word'>
                    <h2 ><Link className='normal_link slow_underline' to={obj.link}>{obj.name}</Link></h2>
                    <p>{obj.descript}</p>
                </div>
                <div className='flex_pic'>
                    <img className='image' src={obj.img} alt={obj.alt}></img>
                </div>
            </article>
        )
    }
    if(obj.pos === "right"){
        return (
            <article className='flex_container_right'>
                <div className='flex_pic'>
                    <img className='image' src={obj.img} alt={obj.alt}></img>
                </div>
                <div className='flex_word'>
                    <h2 ><Link className='normal_link slow_underline' to={obj.link}>{obj.name}</Link></h2>
                    <p>{obj.descript}</p>
                </div>
            </article>
        )
    }
    
    
}
export default ProjectArticle;