import ProjectHeader from '@/components/ProjectHeader';
import ProjectDetails from '@/components/ProjectDetails';
import More from '@/components/More';
import { projectData } from '@/components/component_data/projectData';

import Image from 'next/image';
import { useRouter } from 'next/router';

const Insync = () => {
    const router = useRouter(); 
    const projectName = router.query.name;

    var project = projectData.filter(project => project.title == projectName);
    project = project[0];
    console.log('insync', project);
    
    return (
        <div>
            <ProjectHeader project={project} />
            <ProjectDetails project={project} />
            <div className="proj-subsec-container">
                <div className="proj-subsec-text">
                    <h2>Overview</h2>
                    <hr />
                    <p>{project.overview}</p>
                </div>
                <Image className="proj-subsec-img"
                    src="/insync-1.jpg"
                    width={500}
                    height={500}
                    alt="temp"
                />
            </div>
            <div className="proj-subsec-container">
                <Image className="proj-subsec-img"
                    src="/insync-2.png"
                    width={500}
                    height={500}
                    alt="temp"
                />
                <div className="proj-subsec-text">
                    <h2>Development</h2>
                    <hr />
                    <p>{project.development}</p>
                </div>
            </div>
            <More />
        </div>
    )
}

export default Insync;