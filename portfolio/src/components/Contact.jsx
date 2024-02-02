const Contact = () => {
    return (
        <div className="contact-container">
            <h2>Let's work together :)</h2>
            <hr/>
            <div className="contact-column">
                <a href="/designs">works</a>
                <a href="/about">about</a>
                <a href="https://docs.google.com/document/d/135y-QE1FMqfJH1lYWlytwadCPVgaNV6iHxpt6Y85Peg/edit?usp=sharing" target="_blank" rel="noreferrer noopener">resume</a>
            </div>
            <div className="contact-column">
                <a href="mailto:nicolenliang@gmail.com" target="_blank" rel="noreferrer noopener">email</a>
                <a href="https://www.linkedin.com/in/nicolenliang" target="_blank" rel="noreferrer noopener">linkedin</a>
                <a href="https://instagram.com/nicolenliang" target="_blank" rel="noreferrer noopener">instagram</a>
            </div>
        </div>
    )
}

export default Contact;