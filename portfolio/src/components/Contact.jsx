import Link from 'next/link';
import Resumes from './Resumes';
import { useState } from 'react';

const Contact = () => {
    const [isResumesVisible, setResumesVisible] = useState(false);
    const handleMouseEnter = () => {
        setResumesVisible(true);
    }
    const handleMouseLeave = () => {
        setResumesVisible(false);
    }

    return (
        <div className="contact-container" id="contact">
            <h2>Let's work together :)</h2>
            <hr/>
            <div className="contact-items">
                <ul className="contact-column">
                    <li><Link href="/work">work</Link></li>
                    <li><Link href="/about">about</Link></li>
                    <li><div className="resumes" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        resume
                        {isResumesVisible && <Resumes />}
                    </div></li>
                </ul>
                <ul className="contact-column">
                    <li><a href="mailto:nicolenliang@gmail.com" target="_blank" rel="noreferrer noopener">email</a></li>
                    <li><a href="https://www.linkedin.com/in/nicolenliang" target="_blank" rel="noreferrer noopener">linkedin</a></li>
                    <li><a href="https://www.instagram.com/nicolenliang" target="_blank" rel="noreferrer noopener">instagram</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Contact;