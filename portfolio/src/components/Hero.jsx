import Image from 'next/image';
import Profile from '../../public/profile.png';

const Hero = () => {
    return (
        <div className="hero-container" id="about">
            <Image
                src={Profile}
                className="profile"
                width={488}
                height={631}
                alt="Nicole in New York"/>
            <div className="hero-text">
                <div>
                    <h3 className="intro-title">Hi, I'm</h3>
                    <h1 class="intro-name">Nicole Liang</h1>
                </div>
                <hr/>
                <p>
                    I'm a recent graduate from the University of Florida, earning my Bachelor's in Computer Science. 
                    Paired with a long-standing passion for art and design, I'm hoping to explore different paths and 
                    gain skills and experiences in the intersection of art and technology.
                </p>
            </div>
        </div>
    )
}

export default Hero;