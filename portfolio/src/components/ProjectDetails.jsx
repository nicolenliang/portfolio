const DetailsList = ( {title, project, cat} ) => {
    // project is taken in as a router query -- if u refresh the page it does not store project .
    let info;
    switch (cat) {
        case 'role':
            info = project.role;
            break;
        case 'tools':
            info = project.tools;
            break;
        case 'languages':
            info = project.languages;
            break;
    }

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
    // working: render detailslist manually with each category hardcoded in
    return (
        <div className="pd-container">
            <div className="pd-info">
                <DetailsList
                    title='Role'
                    project={project}
                    cat='role'
                />
            </div>
            <div className="pd-info">
                <DetailsList
                    title='Tools'
                    project={project}
                    cat='tools'
                />
            </div>
            <div className="pd-info">
                <DetailsList
                    title='Languages'
                    project={project}
                    cat='languages'
                />
            </div>
        </div>
    )
};

export default ProjectDetails;