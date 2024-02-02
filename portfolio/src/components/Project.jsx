import Image from 'next/image';
import { designData } from './design.js';

const Designs = () => {
    return (
        <div className="projects-container">
            <div className="projects-grid">
                {designData && designData.map((proj) => (
                    <div className="proj-card" key={proj.id}>
                        <Image src={proj.imgUrl}
                            width={300}
                            height={300}
                            alt="Project Card"/>
                        <p>{proj.title} // {proj.date}</p>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Designs;