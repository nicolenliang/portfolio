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
                    I'm a recent graduate from the University of Florida, earning my Bachelor's in Computer Science.
                     Paired with a long-standing passion for art and design, I'm hoping to explore different paths
                      and gain skills and experiences in the intersection of art and technology.<br /><br />
                    egestas erat imperdiet sed euismod. Sapien nec sagittis aliquam malesuada bibendum. Elit eget
                     gravida cum sociis natoque. Nunc lobortis mattis aliquam faucibus purus in massa. Gravida quis
                      blandit turpis cursus in hac habitasse platea. Cras fermentum odio eu feugiat pretium.<br /><br />
                    Varius sit amet mattis vulputate enim nulla aliquet porttitor lacus. A pellentesque sit amet
                     porttitor. Non pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus.
                      Viverra accumsan in nisl nisi. Euismod in pellentesque massa placerat. Risus feugiat in ante
                       metus dictum at tempor commodo. Mauris sit amet massa vitae. Nunc lobortis mattis aliquam faucibus.
                        Pulvinar pellentesque habitant morbi tristique senectus et. Vitae<br /><br />
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