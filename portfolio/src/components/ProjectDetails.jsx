const DetailsList = ( {title, info} ) => {
    return (
        <div className="list-container">
            <h3>{title}</h3>
            <hr />
            <div className="list-info">
                {info.map((item) => (
                    <p>{item}</p>
                ))}
            </div>
        </div>
    )
};

const ProjectDetails = ( {project} ) => {
    return (
        <div className="pd-container">
            <div className="pd-info">
                <DetailsList
                    title='Role'
                    info={project.role}
                />
            </div>
            <div className="pd-info">
                <DetailsList
                    title='Tools'
                    info={project.tools}
                />
            </div>
            <div className="pd-info">
                <DetailsList
                    title='Languages'
                    info={project.languages}
                />
            </div>
        </div>
    )
};

export default ProjectDetails;