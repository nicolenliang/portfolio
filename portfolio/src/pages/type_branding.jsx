import { useRouter } from 'next/router';
import ProjectHeader from '@/components/ProjectHeader';
import { projectData } from '@/components/component_data/projectData';
import Head from 'next/head';

const TypeBranding = () => {
    const router = useRouter();
    const pathname = router.pathname;

    var project = projectData.filter(project => project.shortcut == pathname);
    project = project[0];

    return (
        <div>
            <Head>
                <title>type & branding &bull; Nicole Liang</title>
                <link rel="icon" href="/favicon.png" />
            </Head>

            <ProjectHeader project={project} />
        </div>
    )
}

export default TypeBranding;