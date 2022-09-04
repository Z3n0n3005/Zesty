const Bomberman = () => {
    return (
        <article>
            <h1>Bomberman</h1>
            <p>This is a game that was made as a project during my course in Object Oriented Programmming during the first semester of my second year in university.</p>
            <p>The reason why a game engine is not used is due to the requirement of the course itself. Therefore, an alternative framework called <a className="normal_link" href="https://libgdx.com/">LibGDX</a> was used. Even though this cause the development time of the game to increase significantly due to bug fixes and the lack of documentation of the framework, a clearer understanding of game development, some design patterns and the Object Oriented mindset was achieved.</p>

            <div className="h2_divider relative_div">
                <h2>
                    Draft and initial plans
                </h2>
            </div>
            <p>The game was planned to have a starting screen, a map selection screen, a character selection screen, a setting screen, and the main game screen.</p>
            <p>Amongst the five screens, only the setting screen was failed to be created due to time constraint.</p>
            <p>A draft of the plan was drawn in Paint for easier implementation of the user interface.</p>
            <img className="normal_image" src="https://github.com/zef1611/Bomberman-OOP-project/blob/main/General%20plan.png?raw=true" alt="plan.png"></img>

            <p>During the plannig phase, the project also included a local multiplayer function, but due to time constraints, multiplayer was removed in order to polish the remaining features.</p>

            <div className="h2_divider relative_div">
                <h2>
                    My responsibilities
                </h2>
            </div>
            <ul>
                <li>Manage and divide workload</li>
                <li>Edit and compile the game graphics</li>
                <li>Creating the logic of the game</li>
                <li>Creating the linkage between each screen transition.</li>
            </ul>
            <div className="h2_divider relative_div">
                <h2>
                    Challenges
                </h2>
            </div>
            <ul>
                <li>Technical
                    <ul>
                        <li>Having to program in Java with no prior experience</li>
                        <li>Using an outdated framework with little to no tutorial.</li>
                        <li>No knowledge of the game development process.</li>
                    </ul>
                </li>
                <li>Social
                    <ul>
                        <li>Manage and dividing the work load of each individual due to difference in skill levels.</li>
                        <li>Making sure the project was progressing and taking into account delays such as examinations and other subjects' assignment.</li>
                    </ul>
                </li>
            </ul>
        </article>
    )
}

export default Bomberman;