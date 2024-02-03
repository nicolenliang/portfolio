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
                <a href="#design" className="nav-link">design</a>
                <a href="/code" className="nav-link">code</a>
                <a href="/about" className="nav-link">about</a>
                <a href="#contact" className="nav-link">contact</a>
            </div>
        </div>
    )
}

export default Navbar;