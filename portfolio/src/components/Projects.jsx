import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

const ProjectCard = ( {project} ) => {
    var projectLink = String(project.shortcut);

    return (
        <div className="project-card" key={project.id}>
            <Link href={{ pathname: projectLink, query: project}}>
                <Image className="project-image"
                src={project.imgUrl}
                width={600}
                height={600}
                alt={project.title}/>
            </Link>
            <p>{project.title} // {project.date}</p>
        </div>
    )
};


const Projects = ( {data} ) => {
    const columnsCountBreakPoints = {350:1, 750:1, 900:2}

    return (
        <div className="project-container">
            <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
                <Masonry gutter={'5rem'}>
                    {data.map((project) => (
                        <ProjectCard project={project} />
                    ))}
                </Masonry>    
            </ResponsiveMasonry>
        </div>
    )
};

export default Projects;