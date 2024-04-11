import Image from 'next/image';

const ProjectHeader = ( {project} ) => {
    return (
        <div className="title-container">
            <div className="title-img">
                <Image 
                    src="/temp1.jpg"
                    width={450}
                    height={450}
                    alt="temp"
                />
            </div>
            <div className="title-text">
                <h1>{project.title}</h1>
                <hr />
                <p className="title-year">{project.date}</p>
                <p>mumbo jumbo {project.desc}</p>
            </div>
        </div>
    )
}

export default ProjectHeader;