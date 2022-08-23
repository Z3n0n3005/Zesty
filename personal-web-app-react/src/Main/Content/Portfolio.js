// import './Portfolio.css';

const Portfolio = () => {
    return (
        <article className = "Portfolio">
            <h1>Lương Trí Vỹ</h1>
            <div className="h2_divider relative_div">
                <h2>Objective</h2>
            </div>

            <ul>
                <li>Obtain real-world working experience in the Software Development Department.</li>
                <li>Seeking entry level position in Software Development to utilize my skills and learn more about the technology in the process.</li>
            </ul>
            
            <div className="h2_divider relative_div">
                <h2>Education</h2>
            </div>

            <ul>
                <li>International University VNU HCMC
                    <ul>
                        <li>Bachelor Degree in Computer Science</li>
                        <li>(expected) 09/2020 - 09/2024 </li>
                    </ul>
                </li>
            </ul>
            <p></p>

            <div className="h2_divider relative_div">
                <h2>Skills</h2>
            </div>
            <ul>
                <li>Technical Skills
                    <ul>
                        <li>OOP, Basic knowledge of Data Structure, Design Pattern, Algorithm</li>
                    </ul>
                </li>
                <li>Programming Languages
                    <ul>
                        <li>C++, Java, Python</li>
                    </ul>
                </li>
                <li>Soft Skills
                    <ul>
                        <li>Self Learning, Problem Solving</li>
                    </ul>
                </li>
                <li>Language
                    <ul>
                        <li>English (IELTS 8.0)</li>
                    </ul>
                </li>
            </ul>

            <div className="h2_divider relative_div">
                <h2>Projects</h2>
            </div>
            <ul>
                <li><a className="normal_link" href="https://github.com/zef1611/Bomberman-OOP-project.git">Bomberman Clone</a>: Made by utilizing OOP concepts and Java.</li>
                <li><a className="normal_link" href="https://github.com/Z3n0n3005/Zesty.git">Zesty</a>: An online portfolio made using JavaScript and React as Front-end and utilizing Vercel to deploy the website</li>
            </ul>
        </article>
    )
}   

export default Portfolio;