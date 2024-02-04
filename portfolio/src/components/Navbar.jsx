import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/logo.png";

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
                <a href="/#design" className="nav-link">design</a>
                <a href="/code" className="nav-link">code</a>
                <a href="/about" className="nav-link">about</a>
                <a href="https://docs.google.com/document/d/135y-QE1FMqfJH1lYWlytwadCPVgaNV6iHxpt6Y85Peg/edit?usp=sharing" target="_blank" rel="noreferrer noopener" className="nav-link">resume</a>
            </div>
        </div>
    )
}

export default Navbar;