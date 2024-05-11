import Image from 'next/image';

const ProjectHeader = ( {project} ) => {
    return (
        <div className="title-container">
            <div>
                <Image className="title-img"
                    src={project.imgUrl}
                    width={400}
                    height={400}
                    alt={project.title}
                />
            </div>
            <div className="title-text">
                <h1>{project.title}</h1>
                <hr />
                <p className="title-year">{project.date}</p>
                <p>{project.desc}</p>
            </div>
        </div>
    )
}

export default ProjectHeader;