import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../public/logo.png';
import Resumes from './Resumes';
import { useState } from 'react';

const Navbar = () => {
    const [isResumesVisible, setResumesVisible] = useState(false);
    const handleMouseEnter = () => {
        setResumesVisible(true);
    }
    const handleMouseLeave = () => {
        setResumesVisible(false);
    }

    return (
        <div className="nav-container">
            <div className="logo">
                <Link href="/">
                    <Image 
                        src={Logo}
                        width={250}
                        height={65}
                        alt="load"/>
                </Link>
            </div>
            <div className="links">
                <Link href="/work" className="nav-link">work</Link>
                <Link href="/about" className="nav-link">about</Link>
                <div className="nav-link" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    resume
                    {isResumesVisible && <Resumes />}
                </div>
            </div>
        </div>
    )
}

export default Navbar;