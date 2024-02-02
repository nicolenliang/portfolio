import Image from 'next/image';
import { designData } from './designdata.js';

const Designs = () => {
    var dataArr = [designData]
    var half = Math.ceil(dataArr.length / 2);
    var leftCol = dataArr.slice(0, half);
    var rightCol = dataArr.slice(half, dataArr.length);

    return (
        <div className="designs-container">
            <div className="left-column">
                {leftCol && leftCol.map((project) => (
                    <div className="design-card" key={project.id}>
                        <Image src={project.imgUrl}
                        width={300}
                        height={300}
                        alt="Project Card"/>
                        <p>{project.title} // {project.date}</p>
                    </div>
                ))}
            </div>
            <div className="right-column">
                {rightCol && rightCol.map((project) => (
                    <div className="design-card" key={project.id}>
                        <Image src={project.imgUrl}
                        width={300}
                        height={300}
                        alt="Project Card"/>
                        <p>{project.title} // {project.date}</p>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Designs;