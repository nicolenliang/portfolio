import { useRouter } from 'next/router';
import ProjectHeader from '@/components/ProjectHeader';
import ProjectDetails from '@/components/ProjectDetails';
import More from '@/components/More';
import Image from 'next/image';

const Insync = () => {
    const router = useRouter();
    const project = router.query;

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
                    src="/temp1.jpg"
                    width={500}
                    height={500}
                    alt="temp"
                />
            </div>
            <div className="proj-subsec-container">
                <Image className="proj-subsec-img"
                    src="/temp6.jpg"
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