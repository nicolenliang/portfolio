import Link from 'next/link';

const Contact = () => {
    return (
        <div className="contact-container" id="contact">
            <h2>Let's work together :)</h2>
            <hr/>
            <div className="contact-items">
                <ul className="contact-column">
                    <li><Link href="#designs">design</Link></li>
                    <li><Link href="/code">code</Link></li>
                    <li><Link href="/about">about</Link></li>
                </ul>
                <ul className="contact-column">
                    <li><Link href="mailto:nicolenliang@gmail.com" target="_blank" rel="noreferrer noopener">email</Link></li>
                    <li><Link href="https://www.linkedin.com/in/nicolenliang" target="_blank" rel="noreferrer noopener">linkedin</Link></li>
                    <li><Link href="https://docs.google.com/document/d/135y-QE1FMqfJH1lYWlytwadCPVgaNV6iHxpt6Y85Peg/edit?usp=sharing" target="_blank" rel="noreferrer noopener">resume</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Contact;