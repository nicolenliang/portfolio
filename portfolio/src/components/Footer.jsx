import Image from 'next/image';
import Logo from '../../public/logo.png';

const Footer = () => {
    const isBrowser = () => 
        typeof window !== "undefined";

    function scrollToTop() {
        if (!isBrowser()) return;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <>
            <div className="footer-container">
                <button className="back-to-top" onClick={scrollToTop}>back to top</button>
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