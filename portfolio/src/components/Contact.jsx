const Contact = () => {
    return (
        <div className="contact-container" id="contact">
            <h2>Let's work together :)</h2>
            <hr/>
            <div className="contact-items">
                <ul className="contact-column">
                    <li><a href="#designs">design</a></li>
                    <li><a href="/code">code</a></li>
                    <li><a href="/about">about</a></li>
                </ul>
                <ul className="contact-column">
                    <li><a href="mailto:nicolenliang@gmail.com" target="_blank" rel="noreferrer noopener">email</a></li>
                    <li><a href="https://www.linkedin.com/in/nicolenliang" target="_blank" rel="noreferrer noopener">linkedin</a></li>
                    <li><a href="https://docs.google.com/document/d/135y-QE1FMqfJH1lYWlytwadCPVgaNV6iHxpt6Y85Peg/edit?usp=sharing" target="_blank" rel="noreferrer noopener">resume</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Contact;