import Image from 'next/image';
import Logo from '../../public/logo.png';

const Footer = () => {
    return (
        <>
            <div className="footer-container">
                <p id="back-to-top">back to top</p>
                <Image src={Logo}
                    width={160}
                    height={40}
                    alt="logo"/>
                <p>
                    {new Date().getFullYear()} (c) made with love by Nicole Liang
                </p>
            </div>
        </>
    )
}

export default Footer;