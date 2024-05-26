import Contact from '@/components/Contact';
import AboutImages from '@/components/AboutImages';
import AboutExperience from '@/components/AboutExperience';
import { experienceData } from '@/components/component_data/experienceData';


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
                    I'm a recent graduate from the University of Florida, earning my Bachelor's in Computer Science. Paired with a long-standing passion for art & design, I'm hoping to explore different paths and gain skills and experiences in the intersection of art and technology.<br /><br />
                    My main focus with both my coding and design work is balancing humanity with functionality. Whether it be making things accessible, clean & concise, or simply efficient, I have a keen eye for detail and a passion for making things with people first in mind. As a lifelong artist, ex-graphic design major, and current software developer, I find joy in working on products that make life easier and more beautiful for the user. With two software internships, multiple coding projects, and 4 years of design experience under my belt, I’m open to any opportunities that can further inform my disciplines, whether through reinforcing old skills or learning new ones!<br /><br />
                    When I’m not sat in front of my laptop screen for whichever reason, you can probably find me reading an embarrassingly cheesy romance novel, practicing the piano, planning my next trip/concert, or — my greatest guilty pleasure — scrolling Twitter (X?) and switching between giggling and sending tweets to my friends. I also dabble in creative writing  while overusing EM dashes, trying every matcha latte on earth (with lavender if possible), and most recently, making handmade ceramics! <br /><br />
                    Don’t hesitate to say hi back -- I’d love to chat!
                    </p>
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