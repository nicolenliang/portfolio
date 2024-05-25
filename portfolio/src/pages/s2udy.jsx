import ProjectHeader from '@/components/ProjectHeader';
import ProjectDetails from '@/components/ProjectDetails';
import More from '@/components/More';

import Image from 'next/image';
import { useRouter } from 'next/router';

const S2udy = () => {
    const router = useRouter();
    const project = router.query;
    console.log(project)

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
                    src="/s2udy-1.jpg"
                    width={500}
                    height={500}
                    alt="temp"
                />
            </div>
            <div className="proj-subsec-container">
                <Image className="proj-subsec-img"
                    src="/s2udy-2.png"
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

export default S2udy;