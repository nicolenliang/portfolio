import Contact from '@/components/Contact';
import AboutImages from '@/components/AboutImages';
import AboutExperience from '@/components/AboutExperience';
import { experienceData } from '@/components/component_data/experienceData';
import Link from 'next/link';
import { SocialIcon } from 'react-social-icons'

const About = () => {
    return (
        <div className="about-container">
            <div className="about-intro">
                <div className="about-img">
                    <AboutImages />
                </div>
                <div className="about-text">
                    <p className="hi-again">Hi again,</p>
                    <h3>I'm Nicole!</h3>
                    <p className="about-bio">
                    I'm a recent graduate from the University of Florida, earning my Bachelor's in Computer Science. Paired with a long-standing passion for art & design, I hope to pursue experiences that explore the intersection of art and technology.<br /><br />
                    My main objective in both my coding and design work is balancing functionality with appeal. Whether it be making things accessible, clean and concise, or simply more efficient, I have a keen eye for detail and a passion for making things with people first in mind. As a lifelong artist, ex-graphic design major, and current software developer, I enjoy compiling my skills and experiences to work on products that focus on human connection and social impact. With two software internships, multiple coding projects, and four years of design experience under my belt, I’m open to any opportunities that can further inform my disciplines, whether through reinforcing old skills or learning new ones!<br /><br />
                    When I’m not sat in front of my laptop screen for whichever reason, you can probably find me reading a cheesy romance novel, doing the Sunday crossword, planning my next trip/concert, or — my greatest guilty pleasure — scrolling Twitter (X?) and switching between giggling and sending tweets to my friends. I also dabble in creative writing (re: overusing EM dashes), trying every matcha latte on earth (with lavender if possible), and most recently, making handmade ceramics! <br /><br />
                    Don’t hesitate to say hi back -- I’d love to chat!
                    </p>
                    <div className="socials">
                        <SocialIcon
                            target="_blank"
                            url="https://linkedin.com/in/nicolenliang"
                            bgColor="transparent"
                            fgColor="#5c554b"
                            />
                        <SocialIcon
                            target="_blank"
                            url="https://instagram.com/nicolenliang"
                            bgColor="transparent"
                            fgColor="#5c554b"
                            />
                        <SocialIcon
                            target="_blank"
                            url="https://github.com/nicolenliang"
                            bgColor="transparent"
                            fgColor="#5c554b"
                            />
                        <SocialIcon
                            target="_blank"
                            url="https://open.spotify.com/user/nic4le"
                            bgColor="transparent"
                            fgColor="#5c554b"
                            />
                    </div>
                </div>
            </div>
            <div className="about-experience">
                {experienceData.map((item) => (
                    <AboutExperience item={item} />
                ))}
            </div>
            <Contact />
        </div>
    )
}

export default About;