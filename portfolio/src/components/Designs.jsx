import Image from 'next/image';
import { designData } from './component_data/designdata.js';

const Designs = () => {
    var half = Math.ceil(designData.length / 2);
    var leftCol = designData.slice(0, half);
    var rightCol = designData.slice(half);

    return (
        <div className="designs-container" id="design">
            <div className="left-column">
                {leftCol.map((project) => (
                    <div className="design-card" key={project.id}>
                        <Image className="design-image"
                        src={project.imgUrl}
                        width={600}
                        height={600}
                        alt="Project Card"/>
                        <p>{project.title} // {project.date}</p>
                    </div>
                ))}
            </div>
            <div className="right-column">
                {rightCol.map((project) => (
                    <div className="design-card" key={project.id}>
                        <Image className="design-image"
                        src={project.imgUrl}
                        width={600}
                        height={600}
                        alt="Project Card"/>
                        <p>{project.title} // {project.date}</p>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Designs;