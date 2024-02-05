import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../public/logo.png';

const resumes = () => {
    <>
        <label for="resumes">resume</label>
        <select name="resumes">
            <option value="design">design</option>
            <option value="software">software</option>
        </select>
    </>
}

const Navbar = () => {
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
                <Link href="/#design" className="nav-link">design</Link>
                <Link href="/code" className="nav-link">code</Link>
                <Link href="/about" className="nav-link">about</Link>
                <Link href="https://docs.google.com/document/d/135y-QE1FMqfJH1lYWlytwadCPVgaNV6iHxpt6Y85Peg/edit?usp=sharing" target="_blank" rel="noreferrer noopener" className="nav-link">resume</Link>
            </div>
        </div>
    )
}

export default Navbar;