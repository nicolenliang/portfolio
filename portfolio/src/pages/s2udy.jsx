import ProjectHeader from '@/components/ProjectHeader';
import ProjectDetails from '@/components/ProjectDetails';
import More from '@/components/More';
import { projectData } from '@/components/component_data/projectData';

import Image from 'next/image';
import { useRouter } from 'next/router';
import Head from 'next/head';

const S2udy = () => {
    const router = useRouter();
    const pathname = router.pathname;

    var project = projectData.filter(project => project.shortcut == pathname);
    project = project[0];

    return (
        <div>
            <Head>
                <title>s2udy &bull; Nicole Liang</title>
                <link rel="icon" href="/favicon.png" />
            </Head>

            <ProjectHeader project={project} />
            <ProjectDetails project={project} />
            <div className="proj-subsec-container">
                <div className="proj-subsec-text">
                    <h2>Overview</h2>
                    <hr />
                    <p>{project.overview}</p>
                </div>
                <Image className="proj-subsec-img"
                    src="/s2udy/Wireframes.png"
                    width={500}
                    height={500}
                    alt="temp"
                />
            </div>
            <div className="proj-subsec-container">
                <Image className="proj-subsec-img"
                    src="/s2udy/PhoneMockups.png"
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