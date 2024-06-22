import Image from 'next/image';
import Link from 'next/link';

const ProjectHeader = ( {project} ) => {
    return (
        <div className="proj-header-container">
            <div className="mobile-align">
                <Image className="proj-header-img"
                    src={project.imgUrl}
                    width={400}
                    height={400}
                    alt={project.title}
                />
            </div>
            <div className="proj-header-text">
                <h1>{project.title}</h1>
                <hr />
                <p className="proj-year">{project.date}</p>
                <p>{project.desc}</p>
            </div>
        </div>
    )
}

export default ProjectHeader;