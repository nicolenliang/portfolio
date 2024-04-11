const Resumes = () => {
    const designLink = "";
    const softwareLink = "https://drive.google.com/file/d/14WUWB4ZkwdNoIjqn8TIgoSL83YYo8SLJ/view?usp=sharing";
    return (
        <div className="resumes-container">
            <ul className="resumes-list">
                <li><a className="resume-link" href={designLink} target="_blank" rel="noreferrer noopener">design</a></li>
                <li><a className="resume-link" href={softwareLink} target="_blank" rel="noreferrer noopener">software</a></li>
            </ul>
        </div>
    )
}

export default Resumes;