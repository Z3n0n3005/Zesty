import { Link } from "react-router-dom";

const Zesty = () =>{
    return(
        <article>
            <h1>Zesty</h1>
            <p>This project is the current website that this content is being hosted on. The reason why it was created is only for getting used to using Javascript, Html,and CSS.</p>
            <p>Furthermore, I planned to use this website as a platform to host various prototypes of my projects through the use of WebAssembly.</p>
            <p>For further information about the project, you can check the <a className="normal_link" href="https://github.com/Z3n0n3005/Zesty.git">GitHub</a> repository or the <Link className="normal_link" to="/about">About</Link> page of this website.</p>
        </article>
    )
}
export default Zesty;