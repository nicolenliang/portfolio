import Image from 'next/image';

const Designs = ( {data} ) => {
    var half = Math.ceil(data.length / 2);
    var leftCol = data.slice(0, half);
    var rightCol = data.slice(half);

    return (
        <div className="project-container" id="design">
            <div className="left-column">
                {leftCol.map((project) => (
                    <div className="project-card" key={project.id}>
                        <Image className="project-image"
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
                    <div className="project-card" key={project.id}>
                        <Image className="project-image"
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