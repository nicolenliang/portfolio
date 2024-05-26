const Resumes = () => {
    const designLink = "https://drive.google.com/file/d/1JKXHVkO1J8Q8mRY9Hh4t-KZrsoFjw16a/view?usp=sharing";
    const softwareLink = "https://drive.google.com/file/d/1pTBtlmqlDn8hi8g2y9ksovyqVdRTNuIc/view?usp=sharing";
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