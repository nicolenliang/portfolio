import Image from 'next/image';
import Logo from '../../public/logo.png';

const Footer = () => {
    return (
        <>
            <div className="footer-container">
                <p id="back-to-top">back to top</p>
                <Image className="logo"
                    src={Logo}
                    width={160}
                    height={40}
                    alt="logo"/>
                <p>
                    Made with love &copy; {new Date().getFullYear()} Nicole Liang
                </p>
            </div>
        </>
    )
}

export default Footer;